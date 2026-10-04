/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: [
    "./src/styles.ts",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        fg: token("fg"),
        muted: token("muted"),
        line: token("line"),
        // Aliases kept so older class names keep resolving.
        primary: token("bg"),
        secondary: token("muted"),
        tertiary: token("surface"),
        "black-100": token("surface"),
        "black-200": token("bg"),
        "white-100": token("fg"),
      },
      fontFamily: {
        heading: ['"Space Grotesk"', '"Noto Sans Arabic"', '"Noto Sans Devanagari"', '"Noto Sans Malayalam"', "system-ui", "sans-serif"],
        body: ["Inter", '"Noto Sans Arabic"', '"Noto Sans Devanagari"', '"Noto Sans Malayalam"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Noto Sans Arabic"', '"Noto Sans Devanagari"', '"Noto Sans Malayalam"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        // Driven by CSS variables so connected scripts (Arabic, Devanagari,
        // Malayalam) can switch tracking off without touching components.
        display: "var(--track-display)",
        label: "var(--track-label)",
        button: "var(--track-button)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
