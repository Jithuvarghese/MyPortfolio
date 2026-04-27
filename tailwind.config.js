/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030c0c",
        secondary: "#aaa6c3",
        tertiary: "#071a18",
        "black-100": "#051210",
        "black-200": "#030c0c",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0a2e2a",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right bottom, rgba(2, 44, 40, 0.75), rgba(0, 0, 0, 0.9))",
      },
    },
  },
  plugins: [],
} 