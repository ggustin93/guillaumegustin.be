// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://guillaumegustin.be',
  // Must match firebase.json `"trailingSlash": false`
  trailingSlash: 'never',
  build: {
    // ~10KB total CSS: inlining removes a critical request chain (FCP/LCP on slow 4G)
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr-BE',
        },
      },
    }),
  ],
  vite: {
    // Type cast: @tailwindcss/vite ships against Vite 7 typings while Astro 5
    // bundles Vite 6 — runtime-compatible, types are not.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
