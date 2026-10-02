import { useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products, formatPrice } from "../data/products";

export default function Cart() {
  const navigate = useNavigate();
  const { items, setQty, removeItem, currency, subtotalUSD, subtotalEUR } = useCart();
  const subtotal = currency === "USD" ? subtotalUSD : subtotalEUR;

  const rows = items
    .map((it) => ({ item: it, product: products.find((p) => p.slug === it.slug)! }))
    .filter((r) => r.product);

  if (rows.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-28 text-center">
        <ShoppingBag size={44} className="text-blush-300 mx-auto mb-6" />
        <h1 className="font-serif text-4xl text-[#5C4D47]">Your cart is empty</h1>
        <p className="text-[#8a776d] mt-4">Discover our beauty-from-within collection.</p>
        <button
          onClick={() => navigate("/shop")}
          className="mt-8 bg-blush-500 text-white text-sm uppercase tracking-[0.22em] px-9 py-3.5 rounded-full hover:bg-blush-600 transition-colors"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="font-serif text-4xl text-[#5C4D47] mb-10">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-5">
          {rows.map(({ item, product }) => {
            const price = currency === "USD" ? product.priceUSD : product.priceEUR;
            return (
              <div key={item.slug} className="flex gap-4 bg-white rounded-2xl border border-[#f1e6df] p-4">
                <button
                  onClick={() => navigate(`/product/${product.slug}`)}
                  className="w-24 h-24 rounded-xl overflow-hidden bg-[#f9f1ec] shrink-0"
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-lg text-[#5C4D47]">{product.name}</h3>
                      <div className="text-xs text-[#a3938a]">{product.format}</div>
                    </div>
                    <button onClick={() => removeItem(item.slug)} className="text-[#b9a79d] hover:text-blush-500" aria-label="Remove">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-[#e4d4cb] rounded-full">
                      <button onClick={() => setQty(item.slug, item.qty - 1)} className="p-2.5 text-[#6b5a52]" aria-label="Decrease">
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm text-[#5C4D47]">{item.qty}</span>
                      <button onClick={() => setQty(item.slug, item.qty + 1)} className="p-2.5 text-[#6b5a52]" aria-label="Increase">
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="font-serif text-lg text-[#5C4D47]">{formatPrice(price * item.qty, currency)}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div>
          <div className="bg-white rounded-2xl border border-[#f1e6df] p-6 sticky top-28">
            <h2 className="font-serif text-2xl text-[#5C4D47] mb-5">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-[#6b5a52]">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal, currency)}</span>
              </div>
              <div className="flex justify-between text-[#6b5a52]">
                <span>Shipping</span>
                <span className="text-blush-500">Free</span>
              </div>
              <div className="border-t border-[#f1e6df] pt-3 flex justify-between font-serif text-xl text-[#5C4D47]">
                <span>Total</span>
                <span>{formatPrice(subtotal, currency)}</span>
              </div>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-6 bg-blush-500 text-white text-sm uppercase tracking-[0.22em] py-4 rounded-full hover:bg-blush-600 transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => navigate("/shop")}
              className="w-full mt-3 text-xs uppercase tracking-[0.2em] text-[#6b5a52] hover:text-blush-500"
            >
              Continue Shopping
            </button>
            <p className="text-[11px] text-[#a3938a] mt-5 text-center">
              Free shipping · One-time purchase (no subscription) · Ships to the United States only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
