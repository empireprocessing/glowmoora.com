import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Minus, Plus, Check, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { getProduct, products, formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import Accordion from "../components/Accordion";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = slug ? getProduct(slug) : undefined;
  const { addItem, currency } = useCart();
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-28 text-center">
        <h1 className="font-serif text-3xl text-[#5C4D47]">Product not found</h1>
        <button onClick={() => navigate("/shop")} className="mt-6 text-blush-500 underline">
          Back to shop
        </button>
      </div>
    );
  }

  const price = currency === "USD" ? product.priceUSD : product.priceEUR;
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const handleAdd = () => {
    addItem(product.slug, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-xs uppercase tracking-[0.18em] text-[#a3938a]">
          <button onClick={() => navigate("/")} className="hover:text-blush-500">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate("/shop")} className="hover:text-blush-500">Shop</button>
          <span className="mx-2">/</span>
          <span className="text-[#6b5a52]">{product.name}</span>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <div className="aspect-square rounded-3xl overflow-hidden bg-[#f9f1ec] border border-[#f1e6df]">
            <img src={product.gallery[active]} alt={`${product.name} — view ${active + 1}`} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {product.gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                  active === i ? "border-blush-400" : "border-[#f1e6df]"
                }`}
              >
                <img src={g} alt={`${product.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Buy box */}
        <div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-champagne-700">{product.category}</span>
          <h1 className="font-serif text-4xl text-[#5C4D47] mt-2 leading-tight">{product.name}</h1>
          <p className="text-[#8a776d] mt-3">{product.tagline}</p>
          <div className="font-serif text-3xl text-[#5C4D47] mt-5">{formatPrice(price, currency)}</div>
          <div className="text-xs uppercase tracking-[0.18em] text-[#a3938a] mt-1">
            {product.format} · {product.servings}
          </div>

          <p className="text-[#6b5a52] leading-relaxed mt-6">{product.shortDesc}</p>

          {/* Qty + add */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center border border-[#e4d4cb] rounded-full">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 text-[#6b5a52]" aria-label="Decrease">
                <Minus size={16} />
              </button>
              <span className="w-10 text-center font-medium text-[#5C4D47]">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="p-3 text-[#6b5a52]" aria-label="Increase">
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="flex-1 bg-blush-500 text-white text-sm uppercase tracking-[0.22em] py-4 rounded-full hover:bg-blush-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              {added ? (<><Check size={16} /> Added</>) : "Add to Cart"}
            </button>
          </div>
          <button
            onClick={() => { addItem(product.slug, qty); navigate("/checkout"); }}
            className="w-full mt-3 border border-[#d9c7bd] text-[#5C4D47] text-sm uppercase tracking-[0.22em] py-4 rounded-full hover:border-blush-400 transition-colors"
          >
            Buy It Now
          </button>

          {/* mini badges */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {[
              { icon: Truck, t: "Free US Shipping" },
              { icon: ShieldCheck, t: "Secure Checkout" },
              { icon: RefreshCw, t: "30-Day Returns" },
            ].map((b) => (
              <div key={b.t} className="text-center">
                <b.icon size={18} className="text-blush-500 mx-auto mb-1.5" />
                <div className="text-[11px] text-[#8a776d]">{b.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Description */}
        <section>
          <h2 className="font-serif text-2xl text-[#5C4D47] mb-4">About this product</h2>
          <p className="text-[#6b5a52] leading-relaxed">{product.longDesc}</p>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="font-serif text-2xl text-[#5C4D47] mb-5">Key benefits</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[#6b5a52]">
                <Check size={18} className="text-blush-500 mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Supplement Facts */}
        <section>
          <h2 className="font-serif text-2xl text-[#5C4D47] mb-5">Supplement Facts</h2>
          <div className="bg-white rounded-2xl border border-[#f1e6df] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#f1e6df] text-sm text-[#8a776d]">
              Serving Size: {product.servings}
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[#a3938a] uppercase text-[11px] tracking-[0.15em]">
                  <th className="px-6 py-3">Ingredient</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">% DV</th>
                </tr>
              </thead>
              <tbody>
                {product.activeIngredients.map((ing) => (
                  <tr key={ing.name} className="border-t border-[#f5ece6]">
                    <td className="px-6 py-3 text-[#5C4D47]">{ing.name}</td>
                    <td className="px-6 py-3 text-[#6b5a52]">{ing.amount}</td>
                    <td className="px-6 py-3 text-[#6b5a52]">{ing.dv ?? "†"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 text-xs text-[#a3938a] border-t border-[#f5ece6]">
              † Daily Value (DV) not established.
            </div>
          </div>
          <div className="mt-5 space-y-3 text-sm text-[#6b5a52]">
            <p><span className="text-[#5C4D47] font-medium">Other ingredients:</span> {product.otherIngredients}</p>
            <p><span className="text-[#5C4D47] font-medium">Directions:</span> {product.directions}</p>
            <p><span className="text-[#5C4D47] font-medium">Warnings:</span> {product.warnings}</p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-serif text-2xl text-[#5C4D47] mb-5">Product FAQ</h2>
          <Accordion items={product.faq} />
        </section>

        {/* Shipping & returns */}
        <section>
          <h2 className="font-serif text-2xl text-[#5C4D47] mb-5">Shipping &amp; returns</h2>
          <Accordion
            items={[
              { q: "How fast is shipping?", a: "Orders are processed within 1–2 business days and typically arrive in 5–7 business days via USPS. Shipping is always free within the United States." },
              { q: "What is your return policy?", a: "We offer a 30-day money-back guarantee. Contact customer service within 30 days of receipt for an RMA number; opened or unopened products can be returned to our Costa Mesa, CA facility." },
              { q: "Do you ship internationally?", a: "At this time we ship to the United States only." },
            ]}
          />
        </section>
      </div>

      {/* Related */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-serif text-3xl text-[#5C4D47] mb-8 text-center">You may also love</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
