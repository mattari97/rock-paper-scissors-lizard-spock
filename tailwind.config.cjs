/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/app.html", "./src/**/*.{svelte,ts}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        "scissors-light": "hsl(40, 84%, 53%)",
        "scissors-dark": "hsl(39, 89%, 49%)",
        "paper-light": "hsl(230, 89%, 65%)",
        "paper-dark": "hsl(230, 89%, 62%)",
        "rock-light": "hsl(349, 70%, 56%)",
        "rock-dark": "hsl(349, 71%, 52%)",
        "lizard-light": "hsl(261, 72%, 63%)",
        "lizard-dark": "hsl(261, 73%, 60%)",
        "spock-light": "hsl(189, 58%, 57%)",
        "spock-dark": "hsl(189, 59%, 53%)",
      },
      neutral: {
        white: "hsl(100, 100%, 100%)",
        dark: "hsl(229, 25%, 31%)",
        score: "hsl(229, 64%, 46%)",
        header: "hsl(217, 16%, 45%)",
      },
      gradient: {
        light: "hsl(214, 47%, 23%)",
        dark: "hsl(237, 49%, 15%)",
      },
    },
    fontWeight: {
      normal: 600,
      bold: 700,
    },
    extend: {
      fontFamily: {
        sans: ["Barlow\\ Semi\\ Condensed", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
