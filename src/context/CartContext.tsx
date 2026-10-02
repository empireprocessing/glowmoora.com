import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { products } from "../data/products";

export interface CartItem {
  slug: string;
  qty: number;
}

type Currency = "USD" | "EUR";

interface CartState {
  items: CartItem[];
  currency: Currency;
  addItem: (slug: string, qty?: number) => void;
  removeItem: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotalUSD: number;
  subtotalEUR: number;
  toggleCurrency: () => void;
}

const CartContext = createContext<CartState | undefined>(undefined);

const STORAGE_KEY = "glowmoora_cart_v1";
const CUR_KEY = "glowmoora_currency_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [currency, setCurrency] = useState<Currency>(() => {
    try {
      return (localStorage.getItem(CUR_KEY) as Currency) || "USD";
    } catch {
      return "USD";
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    localStorage.setItem(CUR_KEY, currency);
  }, [currency]);

  const addItem = (slug: string, qty = 1) =>
    setItems((prev) => {
      const found = prev.find((i) => i.slug === slug);
      if (found) return prev.map((i) => (i.slug === slug ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { slug, qty }];
    });

  const removeItem = (slug: string) => setItems((prev) => prev.filter((i) => i.slug !== slug));

  const setQty = (slug: string, qty: number) =>
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.slug !== slug)
        : prev.map((i) => (i.slug === slug ? { ...i, qty } : i))
    );

  const clear = () => setItems([]);
  const toggleCurrency = () => setCurrency((c) => (c === "USD" ? "EUR" : "USD"));

  const { count, subtotalUSD, subtotalEUR } = useMemo(() => {
    let count = 0;
    let subtotalUSD = 0;
    let subtotalEUR = 0;
    for (const item of items) {
      const p = products.find((pr) => pr.slug === item.slug);
      if (!p) continue;
      count += item.qty;
      subtotalUSD += p.priceUSD * item.qty;
      subtotalEUR += p.priceEUR * item.qty;
    }
    return { count, subtotalUSD, subtotalEUR };
  }, [items]);

  const value: CartState = {
    items,
    currency,
    addItem,
    removeItem,
    setQty,
    clear,
    count,
    subtotalUSD,
    subtotalEUR,
    toggleCurrency,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
