import { useNavigate } from "react-router-dom";
import { Sparkles, Leaf, FlaskConical, ShieldCheck } from "lucide-react";
import { site } from "../data/site";

const values = [
  { icon: Leaf, title: "Clean Sourcing", text: "We choose quality actives and leave out the fillers you don't need." },
  { icon: FlaskConical, title: "Honest Dosages", text: "Every serving is fully disclosed and measured for meaningful support." },
  { icon: ShieldCheck, title: "Made in the USA", text: "Produced in facilities that follow strict quality standards." },
  { icon: Sparkles, title: "Beauty as Self-Care", text: "Simple rituals that help you feel confident in your own skin." },
];

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="relative h-[340px] overflow-hidden">
        <img src="/Herophoto.jpeg" alt="Glowmoora supplements in an elegant setting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2a211d]/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/80">Our Story</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white mt-3">About Glowmoora</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-lg text-[#6b5a52] leading-relaxed">
          Glowmoora was founded in 2026 with a simple belief: true radiance starts from within. We create premium
          beauty-from-within supplements — collagen, hair gummies, hyaluronic acid, vitamin C and more — formulated
          to nourish your skin, hair and nails through clean ingredients and precise, honest dosages.
        </p>
        <p className="text-[#8a776d] leading-relaxed mt-6">
          As a new brand, we focus on doing the fundamentals exceptionally well: thoughtful formulas, full
          ingredient transparency, and an elegant daily ritual you'll look forward to. Everything is made in the USA
          and backed by free USPS shipping and a 30-day money-back guarantee.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl border border-[#f1e6df] p-7">
              <div className="w-12 h-12 rounded-full bg-blush-50 flex items-center justify-center mb-5">
                <v.icon size={20} className="text-blush-500" />
              </div>
              <h3 className="font-serif text-xl text-[#5C4D47] mb-2">{v.title}</h3>
              <p className="text-sm text-[#8a776d] leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/60 border-y border-[#efe4dc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl text-[#5C4D47]">Thoughtfully made, honestly shared</h2>
          <p className="text-[#8a776d] mt-4 leading-relaxed">
            {site.company} operates Glowmoora from {site.llcAddress}. We're a small, dedicated team committed to
            quality and transparency in everything we ship.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-8 bg-blush-500 text-white text-sm uppercase tracking-[0.22em] px-9 py-3.5 rounded-full hover:bg-blush-600 transition-colors"
          >
            Explore the Collection
          </button>
        </div>
      </section>
    </div>
  );
}
