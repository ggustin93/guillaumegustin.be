/**
 * Repaint the job title on the Open Graph card.
 *
 * `og-card-base.jpg` is a hand-made 1200x630 visual with no layered source in
 * the repo — the logo, portrait, name, tagline and domain exist only as those
 * pixels. Everything on it is stable except the red job-title line, which has
 * to track `showcase.title` + `showcase.subtitle` in src/data/{en,fr}.ts.
 *
 * So this blanks that one line on the pristine base and redraws it. Reading
 * from the base rather than from the published card matters: the output is a
 * lossy JPEG, and re-patching the previous output would soften the artwork a
 * little more on every title change, with no way back.
 *
 * Inter-Bold.ttf sits next to this file because public/fonts only ships woff2,
 * which libvips cannot load.
 *
 *   npm run og:card                          # title from package.json
 *   node scripts/generate-og-card.mjs "…"    # or pass your own
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const here = path.dirname(fileURLToPath(import.meta.url));
const BASE = path.join(here, 'og-card-base.jpg');
const CARD = path.join(here, '..', 'public', 'img', 'who-am-i', 'og-card.jpg');
const FONT = path.join(here, 'Inter-Bold.ttf');

const TITLE = process.argv[2];
if (!TITLE) {
  console.error('usage: node scripts/generate-og-card.mjs "<job title>"');
  process.exit(1);
}

// Hand-measured off the artwork. The wiped band has to clear the name's
// baseline (y=324) above and the tagline's cap height (y=402) below.
const LAYOUT = {
  left: 80, // left margin shared with the logo, the red rule and the name
  capTop: 354, // top of the title's capital letters — libvips renders a tight
  // ink box, so this is the composite offset directly
  band: { left: 76, top: 332, width: 648, height: 62 }, // wiped white before redrawing
  fontSize: 28,
  colour: '#ea3d38', // --color-accent, sampled from the wordmark
  quality: 82, // keeps the file near its original ~64 kB
};

const title = await sharp({
  text: {
    // Pango parses the string as markup, so `&` has to be escaped.
    text: `<span foreground="${LAYOUT.colour}">${TITLE.replace(/&/g, '&amp;')}</span>`,
    font: `Inter Bold ${LAYOUT.fontSize}`,
    fontfile: FONT,
    rgba: true,
  },
})
  .png()
  .toBuffer();

const { left, top, width, height } = LAYOUT.band;
const card = await sharp(BASE)
  .composite([
    { input: { create: { width, height, channels: 3, background: '#ffffff' } }, left, top },
    { input: title, left: LAYOUT.left, top: LAYOUT.capTop },
  ])
  .jpeg({ quality: LAYOUT.quality, mozjpeg: true })
  .toBuffer();

await writeFile(CARD, card);
console.log(`og-card.jpg → "${TITLE}" (${(card.length / 1024).toFixed(1)} kB)`);
