import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          DEFAULT: "#131921",
          light: "#232F3E",
          yellow: "#febd69",
          link: "#007185",
          "link-dark": "#002f36",
        },
      },
      maxWidth: {
        "screen-2xl": "1500px",
      }
    },
  },
  plugins: [],
};

export default config;
