/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    colors: {
      primary: "#ff4f00",
      header: "#201515",
      text: "#727272",
      white: "#ffffff",
      black: "#000000",
      lightGray: "#f8f8f8",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      instrument: ["Instrument sans", "sans-serif"],
      inter: ["inter", "sans-serif"],
    },
    extend: {},

    plugins: [],
  },
};
