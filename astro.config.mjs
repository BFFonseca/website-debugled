import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://debugled.dev', // replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },
});
