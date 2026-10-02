import { legalDocs } from "../data/legal";

export default function LegalPage({ slug }: { slug: string }) {
  const doc = legalDocs[slug];
  if (!doc) return null;

  return (
    <div>
      <section className="bg-white/60 border-b border-[#efe4dc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-champagne-700">Glowmoora</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#5C4D47] mt-3">{doc.title}</h1>
          {doc.updated && <p className="text-sm text-[#a3938a] mt-3">{doc.updated}</p>}
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-6">
        {doc.blocks.map((b, i) => (
          <div key={i}>
            {b.h && <h2 className="font-serif text-2xl text-[#5C4D47] mb-2">{b.h}</h2>}
            {b.p && <p className="text-[#6b5a52] leading-relaxed whitespace-pre-line">{b.p}</p>}
            {b.list && (
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-[#6b5a52] leading-relaxed">
                {b.list.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>
    </div>
  );
}
