// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ["var(--font-karla)", "sans-serif"],
        "product-sans": ["var(--font-product-sans)", "sans-serif"],
        nexa: ["var(--font-nexa)", "sans-serif"],
        proxima: ["var(--font-proxima)", "sans-serif"],
      },
      keyframes: {
        floatIn: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        floatIn: 'floatIn 0.5s ease-out',
      },
      colors: {
        purple1: "#4C28BC",
        purple2: "#DCD1FF",
        purple3: "#E08CF7",
        orange: "#FE531F",
        cream: "#FBDABB",
        silver: "#EDEFEE",
        black1: "#333333",
        customBackground: "#F7F5FF",
        customPurple: "#351265",
      },
    },
  },
  plugins: [],
};

export default config;
