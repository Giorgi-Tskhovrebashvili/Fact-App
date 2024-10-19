import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #3b82f6, #ef4444, #16a34a, #eab308)',
      },
      colors: {
        blue: "#3b82f6",
        green: "#16a34a",
        red: "#ef4444",
        yellow: "#eab308",
        pink: "#db2777",
        swamp: "#14b8a6",
        orange: "#f97316",
        purple: "#8b5cf6",
        'custom-gray': '#a8a29e',
      },
      fontFamily: {
        coiny: ['Coiny', 'system-ui'],
        sono: ['Sono', 'monospace'],
      },
      scrollbar: {
        'none': 'scrollbar-width: none; display: none;',
      },
    },
  },
  plugins: [],
};
export default config;
