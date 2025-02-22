import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontSize: {
        28: "28px",
        52: "52px",
      },
      colors: {
        "light-silver": "#D7D7D7",
        "spanish-gray": "#999999",
        "main-orange": "#F2542D",
        "brown-coffee": "#562C2C",
        "bright-gray": "#EEEEEE",
        "floral-white": "#FFF6F4",
        "dark-gray": "#AAAAAA",
        "viridian-green": "#0E9594",
        silver: "#CCCCCC",
        gray: "#BBBBBB",
        lotion: "#FAFAFA",
        cultured: "#F5F5F5",
        seashell: "#FFF4F1",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
