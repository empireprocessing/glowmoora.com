import { useNavigate } from "react-router-dom";
import { Product, formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();
  const { addItem, currency } = useCart();
  const price = currency === "USD" ? product.priceUSD : product.priceEUR;

  return (
    <div className="group bg-white rounded-2xl border border-[#f1e6df] shadow-[0_8px_30px_rgba(180,103,78,0.06)] overflow-hidden flex flex-col transition-shadow hover:shadow-[0_14px_40px_rgba(180,103,78,0.12)]">
      <button
        onClick={() => navigate(`/product/${product.slug}`)}
        className="relative block aspect-square bg-[#f9f1ec] overflow-hidden"
        aria-label={product.name}
      >
        <img
          src={product.image}
          alt={`${product.name} supplement by Glowmoora`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-champagne-500 text-white text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </button>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] uppercase tracking-[0.22em] text-champagne-700 mb-1">{product.category}</span>
        <button
          onClick={() => navigate(`/product/${product.slug}`)}
          className="text-left font-serif text-xl text-[#5C4D47] leading-snug"
        >
          {product.name}
        </button>
        <p className="text-sm text-[#8a776d] mt-1.5 mb-4 flex-1">{product.tagline}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl text-[#5C4D47]">{formatPrice(price, currency)}</span>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/product/${product.slug}`)}
              className="text-xs uppercase tracking-[0.18em] text-[#6b5a52] border-b border-[#d9c7bd] hover:text-blush-500 hover:border-blush-400 pb-0.5"
            >
              View
            </button>
            <button
              onClick={() => addItem(product.slug)}
              className="text-xs uppercase tracking-[0.18em] bg-blush-500 text-white rounded-full px-4 py-2 hover:bg-blush-600 transition-colors"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
