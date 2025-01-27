import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0154AA",
        secondary: "#737A91",
        heading: "#333333",
      },
      fontFamily: {
        sans: ["Neue Haas Display", "sans-serif"],
        display: ["Neue Haas Display", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        xthin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
        black: "900",
      },
    },
  },
  plugins: [],
} satisfies Config;
