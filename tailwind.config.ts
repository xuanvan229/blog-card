import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Noto Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      boxShadow: {
        "blog-card": "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
        "button-focus": " 0px 0px 0px 4px rgba(68, 76, 231, 0.12)",
      },
      backgroundImage: {
        'page-gradient': 'linear-gradient(148deg, #F9FAFB 8.89%, #D2D6DB 100.48%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
