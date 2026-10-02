import { useNavigate } from "react-router-dom";
import { products, formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Ingredients() {
  const navigate = useNavigate();
  const { currency } = useCart();

  return (
    <div>
      <section className="bg-white/60 border-b border-[#efe4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-champagne-700">Full Transparency</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#5C4D47] mt-3">Ingredients</h1>
          <p className="text-[#8a776d] mt-4 max-w-2xl mx-auto">
            Every Glowmoora formula, fully quantified. Exact actives, dosages and other ingredients for all eight
            supplements — nothing hidden.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl border border-[#f1e6df] overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <button
                onClick={() => navigate(`/product/${p.slug}`)}
                className="sm:w-48 shrink-0 aspect-square sm:aspect-auto bg-[#f9f1ec]"
              >
                <img src={p.image} alt={`${p.name} by Glowmoora`} className="w-full h-full object-cover" />
              </button>
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-2xl text-[#5C4D47]">{p.name}</h2>
                    <div className="text-xs uppercase tracking-[0.18em] text-[#a3938a] mt-1">
                      {p.format} · {p.servings}
                    </div>
                  </div>
                  <div className="font-serif text-xl text-[#5C4D47] whitespace-nowrap">
                    {formatPrice(currency === "USD" ? p.priceUSD : p.priceEUR, currency)}
                  </div>
                </div>

                <table className="w-full text-sm mt-5">
                  <thead>
                    <tr className="text-left text-[#a3938a] uppercase text-[11px] tracking-[0.15em]">
                      <th className="py-2">Active ingredient</th>
                      <th className="py-2">Amount</th>
                      <th className="py-2">% DV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.activeIngredients.map((ing) => (
                      <tr key={ing.name} className="border-t border-[#f5ece6]">
                        <td className="py-2 text-[#5C4D47] pr-4">{ing.name}</td>
                        <td className="py-2 text-[#6b5a52]">{ing.amount}</td>
                        <td className="py-2 text-[#6b5a52]">{ing.dv ?? "†"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-sm text-[#6b5a52] mt-4">
                  <span className="text-[#5C4D47] font-medium">Other ingredients:</span> {p.otherIngredients}
                </p>
              </div>
            </div>
          </div>
        ))}

        <p className="text-xs text-[#a3938a] text-center">† Daily Value (DV) not established.</p>
      </div>
    </div>
  );
}
