import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://debugled.dev', // replace with your actual domain
  integrations: [tailwind()],
});
