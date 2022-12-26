//Docs: https://tailwindcss.com/docs/plugins
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    // Check Documentation: https://tailwindcss.com/docs/installation/using-postcss
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "50%",
      },
      fontFamily: {
        "source-sans": ["'Source Sans Pro', sans-serif"],
        "montserrat": ["'Montserrat', sans-serif;"],
      },
      colors: {
        white: "#fff",
        dark: "#1D1D1F",
        rosa: "#BD93F2",
        textcolor: "rgba(245, 245, 251, 0.7)",
        "textcolor-light": "#454f59",
        darktransparent: "rgba(29, 29, 31, 0.7)",
        "dark-grey": "#18162d",
        "light-purple": "#5f58e5",
        "dark-purple": "#2c2952",
      },
    },
  },
  plugins: [],
};
