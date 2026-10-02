import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { site } from "../data/site";

const nav = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { count, currency, toggleCurrency } = useCart();
  const [open, setOpen] = useState(false);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-[#efe4dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <button
            onClick={() => go("/")}
            className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[#5C4D47]"
          >
            {site.brand}
          </button>

          {/* Center nav (desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {nav.map((n) => (
              <button
                key={n.path}
                onClick={() => go(n.path)}
                className={`text-xs uppercase tracking-[0.22em] transition-colors ${
                  pathname === n.path ? "text-blush-500" : "text-[#6b5a52] hover:text-blush-500"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={toggleCurrency}
              className="hidden sm:inline-flex text-xs uppercase tracking-[0.18em] text-[#6b5a52] hover:text-blush-500 border border-[#e4d4cb] rounded-full px-3 py-1.5"
              aria-label="Toggle currency"
            >
              {currency}
            </button>
            <button
              onClick={() => go("/cart")}
              className="relative inline-flex items-center gap-2 bg-white border border-[#e4d4cb] text-[#5C4D47] rounded-full pl-4 pr-5 py-2 hover:border-blush-400 transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={17} className="text-blush-500" />
              <span className="text-xs uppercase tracking-[0.18em]">Cart</span>
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-blush-500 text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-[#5C4D47]"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#efe4dc] bg-cream">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <button
                key={n.path}
                onClick={() => go(n.path)}
                className="text-left py-3 text-sm uppercase tracking-[0.22em] text-[#5C4D47] border-b border-[#f1e6df] last:border-0"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => {
                toggleCurrency();
              }}
              className="text-left py-3 text-xs uppercase tracking-[0.22em] text-blush-500"
            >
              Currency: {currency}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
