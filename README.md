# guillaumegustin.be

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fguillaumegustin.be&label=guillaumegustin.be)](https://guillaumegustin.be/)
[![Astro](https://img.shields.io/badge/Astro-5-ff5d01?logo=astro&logoColor=white)](https://astro.build/)
[![Cloudflare Pages](https://img.shields.io/badge/Hosting-Cloudflare%20Pages-f38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20FR-blueviolet)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[![guillaumegustin.be](docs/screenshot.png)](https://guillaumegustin.be/)

Personal portfolio for **Guillaume Gustin** — IT Business Analyst & Software Engineer based in Brussels.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 5](https://astro.build/) (static output) |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Hosting | Cloudflare Pages |
| Images | AVIF / WebP optimised at build via `sharp` |
| Languages | English (`/`), French (`/fr`) |

## App

The live site lives in **[`astro/`](astro/)** — see [`astro/README.md`](astro/README.md) for dev commands, architecture details, and deploy instructions.

```bash
cd astro
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run deploy   # build + wrangler pages deploy
```

## Design choices

- **Static-first** — no client framework, a single ~2 KB script for header, menu and scroll effects
- **Data-driven** — all content in `src/data/{en,fr}.ts`, typed via a shared `HomepageData` interface
- **Accessible** — semantic HTML, 0 axe violations on both languages (checked via Playwright)
- **Low footprint** — build-time image optimisation, lazy loading, few dependencies
