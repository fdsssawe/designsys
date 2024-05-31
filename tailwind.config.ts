import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary": "#7bb059",
        "secondary": "#a5d4c7",
        "accent": "#7bbac0",
        "primary-dark": "#639145",
        "secondary-dark": "#82c4b2",
        "accent-dark": "#58a8b0",
        "background": "#f8fbf6",
        "text": "#12190c",
        "foreground": "#F2F2F2",
        "foreground-outline": "#8B8D8E",
      },
    },
  },
  plugins: [],
};
export default config;
