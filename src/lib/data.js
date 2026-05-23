// Centralized site data — drives both visible content and SEO/JSON-LD.

export const site = {
  name: "inkweb",
  tagline: "Custom websites that load fast and look expensive",
  description:
    "inkweb is a freelance web studio building custom websites, landing pages and web apps for founders who want to stand out — and convert. No bloated templates, no agency markup.",
  url: "https://inkweb.dev", // ← change to your real domain
  locale: "en_IN",
  email: "inkweb.officials@gmail.com",
  phone: "+917973390266",
  phoneDisplay: "+91 79733 90266",
  instagram: "inkweb.official",
  pricing: false,
  social: {
    instagram: "https://instagram.com/inkweb.official",
    whatsapp: "https://wa.me/917973390266",
    email: "mailto:inkweb.officials@gmail.com",
  },
  keywords: [
    "freelance web developer",
    "custom website development",
    "landing page designer",
    "web app developer India",
    "Shopify developer",
    "SvelteKit developer",
    "SEO web design",
    "inkweb",
  ],
};

export const services = [
  {
    t: "Custom website development",
    d: "Hand-coded, lightning fast, built for SEO and conversion. No page builders.",
  },
  {
    t: "Landing pages that convert",
    d: "Single-page pitches that turn ad traffic into customers. A/B tested copy + design.",
  },
  {
    t: "Web apps & SaaS",
    d: "From auth to dashboards to payments — full-stack apps shipped end-to-end.",
  },
  {
    t: "E-commerce stores",
    d: "Shopify, Medusa, custom carts. Built to scale on Diwali traffic spikes.",
  },
  {
    t: "UI / UX design",
    d: "Figma-to-code without losing the soul. Real prototypes, not pretty pictures.",
  },
  {
    t: "Branding & logos",
    d: "Wordmarks, palettes, type systems — a visual identity people actually remember.",
  },
  {
    t: "SEO & performance",
    d: "Core Web Vitals, structured data, technical SEO. Rank without dark patterns.",
  },
  {
    t: "Responsive redesigns",
    d: "Take your existing site mobile-first without throwing it all away.",
  },
  {
    t: "WhatsApp bots & automation",
    d: "Auto-replies, order flows, lead capture — your business runs on WhatsApp even while you sleep.",
  },
];

export const projects = [
  {
    id: "cowbell-silages",
    title: "Cowbell Silages",
    tags: "MARKETING · AGRICULTURE",
    year: "2020",
    description:
      "A premium silage brand reborn online. Custom storefront, bulk-order flow, lead capture for B2B buyers across north India.",
    url: "https://www.cowbellsilages.com/",
    altText:
      "Screenshot of Cowbell Silages custom e-commerce storefront landing page",
  },
  {
    id: "bagwati-bookstore",
    title: "Bagwati Book Store",
    tags: "E-COMMERCE · BOOKSTORE",
    year: "2025",
    description:
      "A lightning-fast, intuitive digital bookstore experience featuring seamless browsing, automated catalog workflows, and optimized checkout pathways.",
    url: "https://bagwati-book-store.vercel.app/",
    altText:
      "Screenshot of Bagwati Book Store clean custom e-commerce web application user interface",
  },
  {
    id: "respawn-gaming",
    title: "Respawn Gaming Zone",
    tags: "MARKETING · GAMING CAFE",
    year: "2026",
    description:
      "A high-energy, immersive landing page built for a premium gaming lounge. Features seamless booking hooks, event showcases, and dynamic arena layouts.",
    url: "https://respawngaming-zone-deploy.vercel.app/",
    altText:
      "Screenshot of Respawn Gaming Zone website featuring immersive dark-themed gaming lounge interface",
  },
  {
    id: "bansal-fireworks",
    title: "Bansal Fireworks",
    tags: "E-COMMERCE · FIREWORKS",
    year: "2026",
    description:
      "Diwali-season landing page for a premier firecracker brand. WhatsApp ordering, 12k visits in week one.",
    url: "https://www.bansalfireworks.com/",
    altText:
      "Screenshot of Bansal Fireworks landing page showcasing Diwali festival offers",
  },
  {
    id: "eekyme",
    title: "eekyme",
    tags: "MARKETING · HANDMADE CRAFTS",
    year: "2026",
    description:
      "A vibrant portfolio and custom-order site for a handmade craft studio. Showcases polymer clay keychains, nameplates, and wall art with a seamless Instagram-integrated ordering flow.",
    url: "https://eekyme.vercel.app/",
    altText:
      "Screenshot of eekyme handmade craft studio website showcasing artisan products",
  },
];

export const procSteps = [
  {
    t: "Call",
    d: "20-min free intro. We figure out if I'm the right fit. No sales pitch, no pressure.",
  },
  {
    t: "Scope",
    d: "I send a fixed quote, timeline and milestone plan. No surprises, no scope creep.",
  },
  {
    t: "Build",
    d: "Daily updates on a private Notion. You see progress live — not at the big reveal.",
  },
  {
    t: "Ship",
    d: "We launch, I monitor, you get a Loom walkthrough + 30 days of free tweaks.",
  },
];

export const testimonials = [
  {
    q: "He delivered our digital bookstore in 11 days. Sales doubled in the first month. I’m still in shock.",
    n: "Akshay Mittal",
    r: "Founder, Bagwati Book Store",
    a: "AM",
  },
  {
    q: "Worked with three agencies before this. None of them understood the gaming community. He did, on day one.",
    n: "Riya Kapoor",
    r: "Operations Lead, Respawn Gaming Zone",
    a: "RK",
  },
  {
    q: "Pixel-perfect, fast, and the custom storefront handled our North India B2B bulk orders flawlessly. Easy 10/10.",
    n: "Sahil Bansal",
    r: "Supply Chain Head, Cowbell Silages",
    a: "SB",
  },
  {
    q: "Hired for a quick Diwali landing page. Ended up with 12k visits in week one and a seamless WhatsApp order flow.",
    n: "Priya Iyer",
    r: "Co-Founder, Bansal Fireworks",
    a: "PI",
  },
  {
    q: "Most developers vanish after deployment. He still replies in 20 minutes whenever we need to tweak our catalog workflows.",
    n: "Vikram Rao",
    r: "Tech Lead, Bagwati Book Store",
    a: "VR",
  },
  {
    q: "Booked him on a Tuesday, launched the gaming lounge arena layouts next Friday. Our local tournament sold out in 3 hours.",
    n: "Rahul Garg",
    r: "Events Coordinator, Respawn Gaming Zone",
    a: "RG",
  },
];

export const tiers = [
  {
    t: "Launchpad",
    price: "29k",
    note: "starting at",
    sub: "One landing page, shipped fast. Perfect for ads, product launches, MVP tests.",
    feats: [
      "Single-page custom design",
      "Mobile + desktop responsive",
      "On-page SEO + analytics",
      "Domain + hosting setup",
      "1 round of revisions",
      "5-day delivery",
    ],
    cta: "Start a Launchpad",
  },
  {
    t: "Signature",
    price: "75k",
    note: "starting at",
    featured: true,
    tag: "Most picked",
    sub: "A full custom website (5\u20138 pages). The works \u2014 strategy, design, code, deploy.",
    feats: [
      "Up to 8 pages, fully custom",
      "Branding refresh + style guide",
      "CMS so you can edit copy",
      "Forms, integrations, analytics",
      "Lighthouse 95+ guaranteed",
      "3-week delivery",
      "30 days post-launch support",
    ],
    cta: "Start a Signature",
  },
  {
    t: "Atelier",
    price: "Custom",
    note: "from 1.5L",
    sub: "Web apps, e-commerce, dashboards, anything bespoke. Scoped per-project.",
    feats: [
      "Full-stack web app or store",
      "Auth, payments, admin tools",
      "API + database design",
      "QA + load testing",
      "Monthly retainer available",
      "6-week delivery, typical",
    ],
    cta: "Plan something custom",
  },
];

export const faqs = [
  {
    q: "How long does a project usually take?",
    a: "A landing page ships in 5\u20137 days. A full website in 2\u20134 weeks. A web app in 6\u201310 weeks. I lock the timeline in writing before we start.",
  },
  {
    q: "What if I don't have brand assets, copy or images?",
    a: "Totally fine \u2014 most clients don't. I'll write the copy, draft a quick brand system and source/illustrate visuals. It's included in the Signature tier.",
  },
  {
    q: "Will I be able to edit the site myself after?",
    a: "Yes. Every Signature build comes with a CMS so you can swap copy and images. No code required. I'll also record a Loom walkthrough.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes \u2014 clients in the US, UK, UAE and Singapore so far. I send Stripe invoices, work async, and overlap a few hours daily with most time zones.",
  },
  {
    q: "What's not included?",
    a: "Things like paid ads management, ongoing content writing, and Apple/Google app store submissions. I can recommend people I trust for those.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Standard split is 50/50 \u2014 half on kickoff, half on launch. For projects over \u20b92L I do 3 milestones. EMI also possible on request.",
  },
];
