/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#C6B399",
        secondary: "#FFF3E3",
        tertionary: "#E7D3B7",
      },
      fontFamily: {
        pacifico: ['"Pacifico"', "cursive"],
        roboto: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
