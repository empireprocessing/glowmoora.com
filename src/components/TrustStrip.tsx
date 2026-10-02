import { Truck, ShieldCheck, RefreshCw, MapPin } from "lucide-react";

const items = [
  { icon: Truck, title: "Free US Shipping", sub: "USPS on every order" },
  { icon: ShieldCheck, title: "Secure Checkout", sub: "Visa · Mastercard · Discover" },
  { icon: RefreshCw, title: "30-Day Money-Back", sub: "Opened or unopened" },
  { icon: MapPin, title: "Made in USA", sub: "Quality you can trust" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[#efe4dc] bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-blush-50 flex items-center justify-center shrink-0">
              <it.icon size={19} className="text-blush-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-[#5C4D47]">{it.title}</div>
              <div className="text-xs text-[#8a776d]">{it.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
