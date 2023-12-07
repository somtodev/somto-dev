/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        black: "#0a0a0a",
        primary: "#22F231",
        white: "#FAFAFA",
        border: "#DDDDDD",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
