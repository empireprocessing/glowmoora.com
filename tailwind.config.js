/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Jost", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        blush: {
          50: "#fdf6f4",
          100: "#fbeae6",
          200: "#f6d3ca",
          300: "#eeb3a4",
          400: "#e28a74",
          500: "#d4674e",
          600: "#bf4f38",
          700: "#9f3f2e",
          800: "#843729",
          900: "#6f3227",
        },
        champagne: {
          50: "#fbf8f1",
          100: "#f5edda",
          200: "#ead8b2",
          300: "#dcbd83",
          400: "#cfa15c",
          500: "#c08a43",
          600: "#a66f37",
          700: "#89562f",
          800: "#71472c",
          900: "#5f3d28",
        },
        cream: "#fdfbf7",
      },
    },
  },
  plugins: [],
};
