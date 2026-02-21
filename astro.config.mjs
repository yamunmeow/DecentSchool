import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://decentralschool.org',
  vite: {
    ssr: {
      noExternal: ['path-to-regexp']
    }
  }
});