import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    // Static site (great for SEO + CDN + cheap hosting on Cloudflare / Netlify / Vercel / GitHub Pages)
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: true,
      strict: true
    }),
    prerender: {
      handleHttpError: 'warn',
      entries: ['*']
    },
    alias: {
      $lib: './src/lib'
    }
  }
};

export default config;
