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

      boxShadow: {
        "custom-combined":
          "0px 0.5px 0px 0px rgba(255, 255, 255, 0.5) inset, 0px -2px 40px 0px rgba(187, 155, 255, 0.15), 0px -2px 10px 0px rgba(233, 223, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
