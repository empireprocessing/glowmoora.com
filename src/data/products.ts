export interface Ingredient {
  name: string;
  amount: string;
  dv?: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  priceUSD: number;
  priceEUR: number;
  image: string; // main packshot
  gallery: string[];
  format: string;
  servings: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  directions: string;
  warnings: string;
  activeIngredients: Ingredient[];
  otherIngredients: string;
  category: string;
  badge?: string;
  faq: { q: string; a: string }[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "marine-collagen",
    name: "Marine Collagen",
    tagline: "Wild-caught Type I peptides for skin elasticity",
    priceUSD: 49.9,
    priceEUR: 49.9,
    image: "/product1.jpeg",
    gallery: ["/product1.jpeg", "/product1-a.jpeg", "/product1-b.jpeg"],
    format: "Powder tub — 300 g",
    servings: "30 servings (10 g scoop)",
    category: "Skin",
    badge: "Most Popular",
    shortDesc:
      "Hydrolyzed wild-caught marine collagen peptides to support skin elasticity, hydration and a smoother complexion.",
    longDesc:
      "Our premium Marine Collagen is sourced from sustainably wild-caught fish and hydrolyzed into low-molecular-weight peptides for superior bioavailability. Type I collagen is the most abundant structural protein in the skin, and daily supplementation helps replenish what the body naturally produces less of over time. Unflavored and virtually tasteless, it dissolves cleanly into coffee, smoothies or water for an effortless beauty ritual.",
    benefits: [
      "Supports skin elasticity and firmness",
      "Promotes lasting hydration from within",
      "Type I peptides with high bioavailability",
      "Sustainably wild-caught marine source",
      "Unflavored — dissolves clean in any drink",
    ],
    directions:
      "Mix one 10 g scoop into 8–10 oz of your favorite hot or cold beverage once daily. Stir until fully dissolved. Best taken consistently for at least 8–12 weeks.",
    warnings:
      "Contains fish (collagen). Do not use if you have a seafood allergy. Consult your physician before use if pregnant, nursing, taking medication, or managing a medical condition. Keep out of reach of children.",
    activeIngredients: [
      { name: "Hydrolyzed Marine Collagen Peptides (Type I)", amount: "10 g", dv: "†" },
      { name: "Vitamin C (as Sodium Ascorbate)", amount: "40 mg", dv: "44%" },
    ],
    otherIngredients: "No other ingredients. Pure hydrolyzed marine collagen peptides.",
    faq: [
      { q: "Does it have a fishy taste?", a: "No. Our peptides are refined to be virtually tasteless and odorless, so they blend cleanly into any drink." },
      { q: "When will I see results?", a: "Skin benefits are gradual. Most routines run 8–12 weeks of daily use for visible support of elasticity and hydration." },
      { q: "Can I take it with coffee?", a: "Yes. It dissolves in hot or cold liquids without clumping." },
    ],
  },
  {
    id: 2,
    slug: "bovine-collagen",
    name: "Bovine Collagen",
    tagline: "Grass-fed Type I & III peptides for skin, hair & nails",
    priceUSD: 39.9,
    priceEUR: 39.9,
    image: "/product2.jpeg",
    gallery: ["/product2.jpeg", "/product2-a.jpeg", "/product2-b.jpeg"],
    format: "Powder tub — 250 g",
    servings: "25 servings (10 g scoop)",
    category: "Skin & Hair",
    shortDesc:
      "Grass-fed hydrolyzed bovine collagen delivering Type I and III peptides to support skin, hair, nails and joints.",
    longDesc:
      "Sourced from grass-fed, pasture-raised cattle, our Bovine Collagen provides both Type I and Type III peptides — the structural proteins that give skin its bounce and support strong hair and nails. Hydrolyzed for easy absorption and mixing, it is unflavored and pairs perfectly with your morning routine. A versatile foundation for any beauty-from-within regimen.",
    benefits: [
      "Type I & III peptides in one scoop",
      "Supports skin, hair, nails and joints",
      "Grass-fed, pasture-raised source",
      "Hydrolyzed for easy absorption",
      "Unflavored and easy to mix",
    ],
    directions:
      "Add one 10 g scoop to 8–10 oz of water, coffee, or a smoothie once daily. Stir to dissolve. Use consistently for best results.",
    warnings:
      "Consult your physician before use if pregnant, nursing, taking medication, or managing a medical condition. Keep out of reach of children. Store in a cool, dry place.",
    activeIngredients: [
      { name: "Hydrolyzed Bovine Collagen Peptides (Type I & III)", amount: "10 g", dv: "†" },
    ],
    otherIngredients: "No other ingredients. Pure hydrolyzed bovine collagen peptides.",
    faq: [
      { q: "What is the difference from marine collagen?", a: "Bovine provides Type I & III peptides and comes from grass-fed cattle; marine provides primarily Type I from fish. Both support skin." },
      { q: "Is it keto and paleo friendly?", a: "Yes. It contains only collagen peptides with no sugar, carbs or additives." },
      { q: "How long does one tub last?", a: "At one scoop daily, a 250 g tub provides about 25 servings." },
    ],
  },
  {
    id: 3,
    slug: "hair-gummies",
    name: "Hair Gummies",
    tagline: "Biotin-rich gummies for stronger, fuller hair",
    priceUSD: 29.9,
    priceEUR: 29.9,
    image: "/product3.jpeg",
    gallery: ["/product3.jpeg", "/product3-a.jpeg", "/product3-b.jpeg"],
    format: "Jar — 60 gummies",
    servings: "30 servings (2 gummies)",
    category: "Hair",
    shortDesc:
      "Delicious berry gummies with biotin, zinc and folate to nourish hair strength, shine and growth.",
    longDesc:
      "A daily beauty treat that works. Our Hair Gummies pack high-potency biotin alongside zinc, folate and vitamin C to support the keratin structure of hair, nourish follicles and promote healthy shine. Naturally flavored with mixed berry and pectin-based (no gelatin), they make your routine something to look forward to.",
    benefits: [
      "5,000 mcg biotin per serving",
      "Supports hair strength and shine",
      "With zinc, folate and vitamin C",
      "Natural mixed-berry flavor",
      "Pectin-based — no gelatin",
    ],
    directions:
      "Take two (2) gummies daily. Chew thoroughly before swallowing. Do not exceed the recommended serving.",
    warnings:
      "Contains tree nuts (coconut). Consult your physician before use if pregnant, nursing, taking medication, or managing a medical condition. Keep out of reach of children.",
    activeIngredients: [
      { name: "Vitamin C (as Ascorbic Acid)", amount: "30 mg", dv: "33%" },
      { name: "Folate (as L-5-MTHF)", amount: "200 mcg DFE", dv: "50%" },
      { name: "Biotin", amount: "5,000 mcg", dv: "16,667%" },
      { name: "Zinc (as Zinc Citrate)", amount: "5 mg", dv: "45%" },
    ],
    otherIngredients:
      "Glucose syrup, cane sugar, pectin, citric acid, natural mixed-berry flavor, coconut oil, carnauba wax, fruit & vegetable juice (color).",
    faq: [
      { q: "How much biotin is in each serving?", a: "Two gummies deliver 5,000 mcg of biotin plus supporting zinc, folate and vitamin C." },
      { q: "Are they vegetarian?", a: "Yes. They are pectin-based with no gelatin." },
      { q: "Do they contain artificial colors?", a: "No. Color comes from fruit and vegetable juice." },
    ],
  },
  {
    id: 4,
    slug: "zinc-capsules",
    name: "Zinc Capsules",
    tagline: "Chelated zinc for clear skin & nail health",
    priceUSD: 9.9,
    priceEUR: 9.9,
    image: "/product4.jpeg",
    gallery: ["/product4.jpeg", "/product4-a.jpeg", "/product4-b.jpeg"],
    format: "Bottle — 60 capsules",
    servings: "60 servings (1 capsule)",
    category: "Skin & Nails",
    shortDesc:
      "Highly absorbable zinc bisglycinate to support clear, balanced skin, nail health and normal immune function.",
    longDesc:
      "Zinc is an essential mineral involved in skin repair, oil balance and the health of hair and nails. Our capsules use gentle, highly bioavailable zinc bisglycinate for excellent absorption without the stomach upset common to cheaper forms. A simple, affordable cornerstone of any beauty-from-within routine.",
    benefits: [
      "Supports clear, balanced skin",
      "Promotes nail and hair health",
      "Chelated zinc bisglycinate for absorption",
      "Supports normal immune function",
      "Gentle on the stomach",
    ],
    directions:
      "Take one (1) capsule daily with food and water, or as directed by your healthcare professional.",
    warnings:
      "Do not exceed recommended serving. Excess zinc intake over time may interfere with copper absorption. Consult your physician before use if pregnant, nursing, taking medication, or managing a medical condition. Keep out of reach of children.",
    activeIngredients: [
      { name: "Zinc (as Zinc Bisglycinate Chelate)", amount: "15 mg", dv: "136%" },
    ],
    otherIngredients: "Vegetable cellulose (capsule), rice flour, magnesium stearate (vegetable source).",
    faq: [
      { q: "Why zinc bisglycinate?", a: "The chelated form is gentle and highly absorbable, reducing the nausea sometimes caused by zinc oxide or sulfate." },
      { q: "Can I take it with other supplements?", a: "Yes, though separating zinc and high-dose copper or iron by a few hours is ideal." },
      { q: "Should I take it with food?", a: "Yes, taking it with a meal improves tolerance." },
    ],
  },
  {
    id: 5,
    slug: "hyaluronic-acid-capsules",
    name: "Hyaluronic Acid Capsules",
    tagline: "Deep hydration for plump, supple skin",
    priceUSD: 24.9,
    priceEUR: 24.9,
    image: "/product5.jpeg",
    gallery: ["/product5.jpeg", "/product5-a.jpeg", "/product5-b.jpeg"],
    format: "Bottle — 60 capsules",
    servings: "60 servings (1 capsule)",
    category: "Skin",
    shortDesc:
      "Oral hyaluronic acid to support skin moisture, suppleness and a plump, dewy complexion from within.",
    longDesc:
      "Hyaluronic acid can hold up to 1,000 times its weight in water, making it one of the body's key molecules for skin hydration. Our capsules deliver a daily dose of high-purity sodium hyaluronate to help replenish moisture, support suppleness and smooth the look of fine lines — hydration that works from the inside out.",
    benefits: [
      "Supports deep skin hydration",
      "Promotes suppleness and a dewy look",
      "Helps smooth the appearance of fine lines",
      "High-purity sodium hyaluronate",
      "One easy capsule per day",
    ],
    directions:
      "Take one (1) capsule daily with water, preferably with a meal. Drink plenty of water throughout the day.",
    warnings:
      "Consult your physician before use if pregnant, nursing, taking medication, or managing a medical condition. Keep out of reach of children.",
    activeIngredients: [
      { name: "Sodium Hyaluronate (Hyaluronic Acid)", amount: "120 mg", dv: "†" },
    ],
    otherIngredients: "Vegetable cellulose (capsule), microcrystalline cellulose, rice flour.",
    faq: [
      { q: "Is oral hyaluronic acid effective?", a: "Daily oral hyaluronic acid is a popular way to support whole-body skin moisture alongside topical care." },
      { q: "Can I take it with collagen?", a: "Yes. Many people pair hyaluronic acid with collagen as part of a hydration-focused routine." },
      { q: "Is it vegan?", a: "Yes. Our sodium hyaluronate is produced by fermentation and the capsule is vegetable-based." },
    ],
  },
  {
    id: 6,
    slug: "vitamin-c",
    name: "Vitamin C",
    tagline: "Antioxidant support for collagen & radiance",
    priceUSD: 19.9,
    priceEUR: 19.9,
    image: "/product6.jpeg",
    gallery: ["/product6.jpeg", "/product6-a.jpeg", "/product6-b.jpeg"],
    format: "Bottle — 90 tablets",
    servings: "90 servings (1 tablet)",
    category: "Skin",
    shortDesc:
      "Buffered vitamin C with rose hips and bioflavonoids to support natural collagen synthesis and radiant skin.",
    longDesc:
      "Vitamin C is essential for the body's own collagen production and is a powerful antioxidant that helps protect skin cells from everyday oxidative stress. Our buffered formula pairs 1,000 mg of vitamin C with rose hips and citrus bioflavonoids for gentle, enhanced support and a brighter, more radiant complexion.",
    benefits: [
      "Supports natural collagen synthesis",
      "Antioxidant protection for the skin",
      "Buffered — gentle on the stomach",
      "With rose hips and bioflavonoids",
      "Supports a brighter, radiant look",
    ],
    directions:
      "Take one (1) tablet daily with food and water, or as directed by your healthcare professional.",
    warnings:
      "Consult your physician before use if pregnant, nursing, taking medication, or managing a medical condition. Keep out of reach of children.",
    activeIngredients: [
      { name: "Vitamin C (as Ascorbic Acid & Sodium Ascorbate)", amount: "1,000 mg", dv: "1,111%" },
      { name: "Rose Hips (Rosa canina)", amount: "25 mg", dv: "†" },
      { name: "Citrus Bioflavonoid Complex", amount: "25 mg", dv: "†" },
    ],
    otherIngredients: "Microcrystalline cellulose, vegetable stearic acid, croscarmellose sodium, vegetable coating.",
    faq: [
      { q: "Why buffered vitamin C?", a: "Buffering with sodium ascorbate makes the high dose gentler on sensitive stomachs." },
      { q: "How does it help skin?", a: "Vitamin C is a required cofactor for the body's own collagen synthesis and provides antioxidant support." },
      { q: "Can I take more than one tablet?", a: "Stick to the recommended one tablet daily unless advised otherwise by your healthcare professional." },
    ],
  },
  {
    id: 7,
    slug: "borage-oil",
    name: "Borage Oil",
    tagline: "High-GLA oil for calm, nourished skin",
    priceUSD: 34.9,
    priceEUR: 34.9,
    image: "/product7.jpeg",
    gallery: ["/product7.jpeg", "/product7-a.jpeg", "/product7-b.jpeg"],
    format: "Bottle — 90 softgels",
    servings: "90 servings (1 softgel)",
    category: "Skin",
    shortDesc:
      "Cold-pressed borage oil rich in GLA omega-6 to nourish the skin barrier and support a calm, supple complexion.",
    longDesc:
      "Borage oil is one of nature's richest plant sources of gamma-linolenic acid (GLA), an omega-6 fatty acid that supports the skin's lipid barrier and helps maintain softness and suppleness. Our cold-pressed softgels deliver a concentrated daily dose to nourish skin from within and support overall skin comfort and resilience.",
    benefits: [
      "Richest plant source of GLA omega-6",
      "Nourishes the skin's moisture barrier",
      "Supports a calm, supple complexion",
      "Cold-pressed for quality",
      "Convenient daily softgel",
    ],
    directions:
      "Take one (1) softgel daily with food and water, or as directed by your healthcare professional.",
    warnings:
      "Consult your physician before use if pregnant, nursing, taking medication (including blood thinners), or managing a medical condition. Keep out of reach of children.",
    activeIngredients: [
      { name: "Borage Seed Oil (Borago officinalis)", amount: "1,000 mg", dv: "†" },
      { name: "of which Gamma-Linolenic Acid (GLA)", amount: "240 mg", dv: "†" },
    ],
    otherIngredients: "Softgel capsule (bovine gelatin, glycerin, purified water), natural tocopherols (antioxidant).",
    faq: [
      { q: "What is GLA?", a: "Gamma-linolenic acid is an omega-6 fatty acid that supports the skin barrier; borage oil is one of its richest natural sources." },
      { q: "How is it different from evening primrose oil?", a: "Borage oil is more concentrated in GLA per serving; evening primrose is a milder, classic alternative." },
      { q: "When should I take it?", a: "With a meal containing some fat for best absorption." },
    ],
  },
  {
    id: 8,
    slug: "evening-primrose-oil",
    name: "Evening Primrose Oil",
    tagline: "Gentle GLA softgels for skin balance",
    priceUSD: 4.9,
    priceEUR: 4.9,
    image: "/product8.jpeg",
    gallery: ["/product8.jpeg", "/product8-a.jpeg", "/product8-b.jpeg"],
    format: "Trial bottle — 30 softgels",
    servings: "30 servings (1 softgel)",
    category: "Skin",
    shortDesc:
      "Cold-pressed evening primrose oil with GLA to support skin balance, softness and monthly comfort — a perfect trial size.",
    longDesc:
      "A beloved classic in beauty-from-within care, evening primrose oil provides gamma-linolenic acid (GLA) to support the skin's natural moisture balance and softness, and is traditionally used for monthly comfort. This 30-softgel trial size is the ideal way to begin your Glowmoora ritual.",
    benefits: [
      "Natural source of GLA omega-6",
      "Supports skin softness and balance",
      "Traditionally used for monthly comfort",
      "Cold-pressed softgels",
      "Perfect trial size to start",
    ],
    directions:
      "Take one (1) softgel daily with food and water, or as directed by your healthcare professional.",
    warnings:
      "Consult your physician before use if pregnant, nursing, taking medication (including blood thinners), or managing a medical condition. Keep out of reach of children.",
    activeIngredients: [
      { name: "Evening Primrose Oil (Oenothera biennis)", amount: "500 mg", dv: "†" },
      { name: "of which Gamma-Linolenic Acid (GLA)", amount: "50 mg", dv: "†" },
    ],
    otherIngredients: "Softgel capsule (bovine gelatin, glycerin, purified water), natural tocopherols (antioxidant).",
    faq: [
      { q: "Is this a full-size bottle?", a: "This is a 30-softgel trial size — a low-commitment way to try evening primrose oil before the full routine." },
      { q: "When is the best time to take it?", a: "With a meal, once daily." },
      { q: "Can I take it with borage oil?", a: "Both provide GLA; most people choose one GLA oil at a time." },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (value: number, currency: "USD" | "EUR") =>
  `${currency === "USD" ? "$" : "€"}${value.toFixed(2)}`;
