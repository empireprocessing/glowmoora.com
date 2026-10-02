# Glowmoora Design System — CHOSEN VIBE 2 (editorial serif, light & airy) warmed with blush/champagne

Foundation: Vibe 2 "Japanese Minimalism" editorial aesthetic — Cormorant Garamond display serif,
clean sans body, cream canvas, generous whitespace, delicate hairline separators, asymmetric layouts,
uppercase letter-spaced micro-labels. Warmed to the brand brief with blush/rose + champagne gold accents.

## Palette
- Canvas / cream: #FDFBF7 (base), #FAF9F5 alt, #FBEAE6 blush-100 wash
- Ink / text: #3A2F2A (body), #5C4D47 (headings deep taupe)
- Blush/rose accent: #D4674E (blush-500), hover #BF4F38, soft #EEB3A4 / #F6D3CA, wash #FBEAE6
- Champagne gold: #C08A43 (champagne-500), #CFA15C, light #EAD8B2
- Muted taupe lines: #E8DDD6 / #D6D2C4
- Borders / hairlines: gradient-to-r from-transparent via-[#E8DDD6] to-transparent

## Type
- Headings: `font-serif` = Cormorant Garamond (light/medium weights, large, high-contrast, italic for emphasis)
- Body / UI: `font-sans` = Jost (light 300 / 400), small uppercase tracking-[0.2em] for labels
- Micro-labels: text-[11px] uppercase tracking-[0.25em] text-champagne-700

## Components
- Buttons primary: bg-blush-500 text-cream rounded-full px-8 py-3 tracking-wide hover:bg-blush-600
- Buttons ghost/secondary: border-b border-current pb-1 uppercase text-xs tracking-[0.2em] (text link style)
- Cards: bg-white rounded-2xl border border-[#F1E6DF] shadow-[0_8px_30px_rgba(180,103,78,0.06)]
- Separators: thin gradient hairline
- Section rhythm: py-20 / py-28, max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

## Original extracted Vibe 2 code (reference)
```tsx
export const Vibe2_JapaneseMinimalism = () => {
  return (
    <div className="w-full min-h-screen bg-[#FAF9F5] text-[#2C2C2A]">
      {/* font-mincho = Cormorant Garamond, font-sans-light = Inter 300 */}
      {/* nav: serif wordmark left, uppercase tracking links right */}
      {/* hero: huge serif headline "Pure. Essential. Glow." with italic accent, vertical accent text, asymmetric image */}
      {/* delicate gradient hairline separator */}
      {/* product list asymmetrical alternating left/right, serif titles, bordered add-to-cart */}
    </div>
  );
};
```
Build all pages to this language: cream canvas, serif headlines, airy spacing, blush/champagne accents,
hairline separators, uppercase micro-labels, rounded soft cards.
