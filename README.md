# inkweb — Svelte freelance studio site

Custom freelance/web-studio site built with **SvelteKit 2 + Svelte 5 (runes)**. Static-prerendered for blistering speed and SEO.

## What's inside

- **SvelteKit 2** with the static adapter — outputs plain HTML/CSS/JS, deployable to anything (Cloudflare Pages, Netlify, Vercel, GitHub Pages, S3, your own server).
- **Svelte 5 runes** (`$state`, `$effect`, `$derived`, `$props`) — modern reactive syntax, smaller bundles.
- **SEO-first**:
  - Full meta tags, Open Graph, Twitter Card, canonical URL
  - `application/ld+json` structured data — **ProfessionalService**, **WebSite**, **FAQPage**, **ItemList** schemas
  - Dynamic **`/sitemap.xml`** and **`/robots.txt`** endpoints
  - Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<blockquote>`), proper heading hierarchy
  - Skip link, ARIA labels, focus rings, reduced-motion support
  - Prerendered → instant first paint, indexable by every crawler
- **Themeable** — accent + dark/light controlled via CSS custom properties.
- **No backend required** — the contact form opens a prefilled `mailto:` to `inkweb.officials@gmail.com`. Swap in Formspree / Resend / SendGrid later if you want a real inbox.

## Run it locally

Requires **Node 20+** and **pnpm / npm / yarn / bun**.

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build a production site

```bash
npm run build
npm run preview  # check the build locally first
```

The static output lands in `build/`. Drag it to any host.

## Deploy in one click

- **Cloudflare Pages**: connect the repo, build command `npm run build`, output dir `build`.
- **Netlify**: same — `npm run build` → `build/`.
- **Vercel**: detects SvelteKit automatically.
- **GitHub Pages**: push `build/` to a `gh-pages` branch.

## Change your domain / brand

Open `src/lib/data.js` and edit the `site` object — every meta tag, JSON-LD entry, and contact link reads from there.

```js
export const site = {
  name: 'inkweb',
  url: 'https://inkweb.dev',     // ← put your real domain here
  email: 'inkweb.officials@gmail.com',
  phone: '+917973390266',
  // ...
};
```

When you publish, also:

1. Replace `static/og-image.svg` with a PNG version (1200×630) so Twitter/LinkedIn show a proper preview — many platforms don't accept SVG.
2. Add real client logos / screenshots in `src/lib/components/Thumb.svelte` (or use real images via `<enhanced:img>`).
3. Submit your sitemap (`https://yourdomain.com/sitemap.xml`) to [Google Search Console](https://search.google.com/search-console) and Bing Webmaster Tools.

## Tech versions

| Package | Version |
| --- | --- |
| svelte | ^5.20 |
| @sveltejs/kit | ^2.20 |
| vite | ^6.0 |
| @sveltejs/adapter-static | ^3.0 |

## Lighthouse target

Out of the box this hits **95+** on Performance / Accessibility / Best Practices / SEO when prerendered and served over a CDN. If anything dips, run `npm run build && npm run preview` and audit — the usual fixes are (a) compressing the OG image and (b) caching headers from your host.

---

© inkweb · Built by hand.
