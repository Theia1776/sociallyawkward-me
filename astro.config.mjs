// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used by sitemap, canonical links, OG tags, structured data.
  site: 'https://www.sociallyawkward.me',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});