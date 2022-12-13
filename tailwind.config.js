/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "0px", max: "767px" },

      md: { min: "768px", max: "1023px" },

      lg: { min: "1024px", max: "1279px" },

      xl: { min: "1280px", max: "1535px" },
    },
    colors: {
      lime: "#D0FF00",
      dark: "#5A5A5A",
      darkLime: "#D0F000",
      darkRed: "#8B0000",
      mediumGrey: "#939799",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
