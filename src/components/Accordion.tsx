import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[#f1e6df] border-y border-[#f1e6df]">
      {items.map((it, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-serif text-lg text-[#5C4D47] pr-4">{it.q}</span>
            <ChevronDown
              size={18}
              className={`text-blush-500 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && <p className="pb-5 text-sm text-[#8a776d] leading-relaxed">{it.a}</p>}
        </div>
      ))}
    </div>
  );
}
