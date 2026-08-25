# guillaumegustin.be — Astro app

One-page bilingual portfolio (EN at `/`, FR at `/fr`), built with **Astro 5 + Tailwind CSS 4** and deployed on **Cloudflare Pages**.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # serve dist/ locally
npm run check      # astro check (EN/FR data validated against a shared interface)
npm run test:a11y  # axe-core via Playwright (EN + FR)
npm run deploy     # build + wrangler pages deploy
```

## Architecture

- `src/data/{en,fr}.ts` — all content, typed by `src/data/types.ts` (`satisfies HomepageData`: a missing key in FR breaks the build)
- `src/data/images.ts` — central image registry (`src/assets/img/`, optimised to AVIF/WebP at build by sharp)
- `src/components/` — one component per section; component-scoped styles
- `src/styles/global.css` — Tailwind 4 tokens (`@theme`), self-hosted Inter fonts, reveal animations
- `src/scripts/main.ts` — single client script (~2 KB): sticky header, mobile menu, scroll-reveal, lightbox
- SEO: full head in `src/layouts/BaseLayout.astro` (canonical, hreflang, OG, Twitter, JSON-LD Person + WebSite), sitemap via `@astrojs/sitemap`

## Deploy

Cloudflare Pages project `guillaumegustin-be`, deployed by direct Wrangler upload (`npm run deploy`, run from this directory so `functions/` is included). `public/_headers` holds security headers and asset caching rules.

The contact form currently uses `mailto:`; a Pages Function (`functions/api/contact.js`, Mailjet) exists but is not active.
