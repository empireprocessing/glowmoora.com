import { useNavigate } from "react-router-dom";
import { Sparkles, Leaf, FlaskConical, Heart } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import TrustStrip from "../components/TrustStrip";

const benefits = [
  { icon: Sparkles, title: "Radiant Skin", text: "Collagen, hyaluronic acid and vitamin C to support elasticity, hydration and glow." },
  { icon: Leaf, title: "Clean Formulas", text: "Thoughtfully sourced actives with no fillers you don't need. Made in the USA." },
  { icon: FlaskConical, title: "Precise Dosages", text: "Every serving is measured for meaningful support — no proprietary guesswork." },
  { icon: Heart, title: "Beauty as Ritual", text: "Simple daily steps that fit your routine and feel like a moment for yourself." },
];

const steps = [
  { n: "01", title: "Choose your ritual", text: "Pick the formulas for your skin, hair and nail goals." },
  { n: "02", title: "Take daily", text: "One simple step each day — gummies, capsules or a scoop in your drink." },
  { n: "03", title: "Glow from within", text: "Stay consistent for 8–12 weeks to support visible, lasting results." },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[72vh] min-h-[480px] w-full overflow-hidden">
          <img
            src="/Herophoto.jpeg"
            alt="Glowmoora beauty supplements arranged on an elegant vanity"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-center pb-14 sm:pb-20">
            <button
              onClick={() => navigate("/shop")}
              className="bg-blush-500 text-white text-sm uppercase tracking-[0.25em] px-10 py-4 rounded-full shadow-lg hover:bg-blush-600 transition-colors"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-champagne-700">Beauty From Within</span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#5C4D47] mt-4 leading-tight">
          Radiance begins beneath the surface
        </h1>
        <p className="text-[#8a776d] mt-6 leading-relaxed text-lg">
          Glowmoora creates premium nutritional supplements designed to nourish your skin, hair and nails from the
          inside out. Clean formulas, precise dosages and an elegant daily ritual — made in the USA.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl border border-[#f1e6df] p-7">
              <div className="w-12 h-12 rounded-full bg-blush-50 flex items-center justify-center mb-5">
                <b.icon size={20} className="text-blush-500" />
              </div>
              <h3 className="font-serif text-xl text-[#5C4D47] mb-2">{b.title}</h3>
              <p className="text-sm text-[#8a776d] leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-champagne-700">The Collection</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#5C4D47] mt-2">Our Supplements</h2>
          </div>
          <button
            onClick={() => navigate("/shop")}
            className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] text-[#6b5a52] border-b border-[#d9c7bd] hover:text-blush-500 hover:border-blush-400 pb-0.5"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white/60 border-y border-[#efe4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-champagne-700">How It Works</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#5C4D47] mt-2">Your daily glow ritual</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="font-serif text-5xl text-blush-200 mb-3">{s.n}</div>
                <h3 className="font-serif text-2xl text-[#5C4D47] mb-2">{s.title}</h3>
                <p className="text-sm text-[#8a776d] leading-relaxed max-w-xs mx-auto">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY HERO BAND */}
      <section className="relative h-[380px] overflow-hidden">
        <img
          src="/Herophoto.jpeg"
          alt="Glowmoora supplements styled in a bright beauty setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2a211d]/35" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-serif text-3xl sm:text-5xl text-white max-w-2xl leading-tight">
            A refined approach to beauty
          </h2>
          <p className="text-white/85 mt-4 max-w-xl">
            Clean, effective supplements for the way you want to feel in your skin.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-8 bg-white text-[#5C4D47] text-sm uppercase tracking-[0.22em] px-9 py-3.5 rounded-full hover:bg-cream transition-colors"
          >
            Explore the Collection
          </button>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#5C4D47] leading-tight">
          Begin your beauty-from-within ritual
        </h2>
        <p className="text-[#8a776d] mt-4 leading-relaxed">
          Free USPS shipping on every order. One-time purchase, no subscription. 30-day money-back guarantee.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="mt-8 bg-blush-500 text-white text-sm uppercase tracking-[0.25em] px-10 py-4 rounded-full hover:bg-blush-600 transition-colors"
        >
          Shop the Collection
        </button>
      </section>
    </div>
  );
}
