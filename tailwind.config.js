/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/hero-pattern.jpeg')",
      },

      colors: {
        my_white: "#ECECEC",
        my_dark: "#0B081C",
      },
      fontFamily: {
        montserrat: '"Montserrat", sans-serif',
      },
    },
  },
  plugins: [],
};
