/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "978px",
        xl: "1366px",
      },

      fontFamily: {
        raleway: "'Raleway', sans-serif",
        merri: "'Merriweather', serif",
      },
      colors: {
        black: "#222222",
        lightGray: "#EFEFEF",
        washedGray: "#F8F8F8",
        darkGray: "#C9C9C9",
        dotInactive: "#D4D4D4",
        dotActive: "#F4F4F4",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
