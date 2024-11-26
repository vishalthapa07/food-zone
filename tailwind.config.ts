import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white1: "#FFFFFF",
        white2: "#EEEEEE",
        darkBlack1: "#000000",
        darkBlack2: "#232323",
        lightBlack: "#333333",
        darkGray: "#6B6B6B",
        lightGray1: "#8C8C8C",
        lightGray2: "#818181",
        orange1: "#FE7F26",
        orange2: "#FE8026",
        orange3: "#FF8A00",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
