/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // DebugLED brand palette — tweak to your liking
        led: {
          green:  '#00FF94', // the "LED" accent — electric green
          dark:   '#0A0E1A', // deep dark background
          surface:'#111827', // card/surface background
          muted:  '#6B7280', // muted text
          light:  '#F3F4F6', // light text on dark bg
        },
      },
      fontFamily: {
        mono:    ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
