import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          ivory: "#F6F0E8",
          blush: "#E8D1D8",
          gold: "#D4AF37",
          charcoal: "#2D2D2D",
        }
      },
      fontFamily: {
        names: ['var(--font-great-vibes)'],
        heading: ['var(--font-cormorant)'],
        body: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
export default config;
