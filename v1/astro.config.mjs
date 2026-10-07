// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Cloudflare adapter is included but the site is configured to output pure
// static HTML (output: 'static'), so the build produces a plain ./dist folder
// that is served by Cloudflare Workers static assets (see wrangler.jsonc).
// The adapter entry is kept available in case SSR/on-the-fly rendering is ever
// needed, but the primary deployment path does not depend on it.
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.samainsurance.co.in',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
    cloudflare(),
  ],
});