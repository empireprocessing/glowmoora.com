import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["All", "Skin", "Skin & Hair", "Skin & Nails", "Hair"];

export default function Shop() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <div>
      {/* Page header */}
      <section className="bg-white/60 border-b border-[#efe4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-champagne-700">The Collection</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#5C4D47] mt-3">Shop All</h1>
          <p className="text-[#8a776d] mt-4 max-w-xl mx-auto">
            Eight carefully formulated supplements for radiant skin, strong hair and healthy nails.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-xs uppercase tracking-[0.18em] px-5 py-2 rounded-full border transition-colors ${
                cat === c
                  ? "bg-blush-500 text-white border-blush-500"
                  : "bg-white text-[#6b5a52] border-[#e4d4cb] hover:border-blush-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
