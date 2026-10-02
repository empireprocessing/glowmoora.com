import { useNavigate } from "react-router-dom";
import { site, legalLinks } from "../data/site";
import { CardRow } from "./PaymentIcons";

const shopLinks = [
  { label: "Home", path: "/" },
  { label: "Shop All", path: "/shop" },
  { label: "Ingredients", path: "/ingredients" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const navigate = useNavigate();
  const go = (p: string) => navigate(p);

  return (
    <footer className="bg-[#2a211d] text-[#e8ded6] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + payments */}
          <div>
            <div className="font-serif text-2xl tracking-[0.15em] uppercase mb-3">{site.brand}</div>
            <p className="text-sm text-[#bca99f] leading-relaxed mb-5">
              {site.tagline}. Premium beauty-from-within supplements, thoughtfully made in the USA.
            </p>
            <div className="bg-white/95 rounded-xl p-3 inline-flex">
              <CardRow size={60} height={38} />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne-300 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l.path}>
                  <button onClick={() => go(l.path)} className="text-sm text-[#cbb9af] hover:text-white transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne-300 mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.path}>
                  <button onClick={() => go(l.path)} className="text-sm text-[#cbb9af] hover:text-white transition-colors text-left">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne-300 mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-[#cbb9af]">
              <li className="text-white">{site.company}</li>
              <li>{site.llcAddress}</li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="hover:text-white transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="pt-2 text-[#bca99f]">
                <span className="text-[#e8ded6]">Return Address:</span> {site.returnAddress}
              </li>
            </ul>
          </div>
        </div>

        {/* FDA disclaimer (nutra) */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[11px] leading-relaxed text-[#9a897f]">
            All trademarks and copyrights are the property of their respective owners and are not affiliated with
            nor do they endorse {site.company}. These statements have not been evaluated by the Food and Drug
            Administration (FDA) nor by the Federal Food, Drug, and Cosmetic Act (FD&amp;C Act). This product is
            not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. By using
            this site, you agree to follow the Privacy Policy and all Terms &amp; Conditions printed on this site.
            Void where prohibited by law.
          </p>
          <p className="mt-4 text-xs text-[#9a897f]">
            © {new Date().getFullYear()} {site.company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
