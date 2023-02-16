/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'first-color': 'hsl(var(--first-color) / <alpha-value>)',
      'first-color-alt': 'hsl(var(--first-color-alt) / <alpha-value>)',
      'first-color-lighter': 'hsl(var(--first-color-lighter) / <alpha-value>)',
      'title-color': 'hsl(var(--title-color) / <alpha-value>)',
      'text-color': 'hsl(var(--text-color) / <alpha-value>)',
      'text-color-light': 'hsl(var(--text-color-light) / <alpha-value>)',
      'input-color': 'hsl(var(--input-color) / <alpha-value>)',
      'body-color': 'hsl(var(--body-color) / <alpha-value>)',
      'scroll-bar-color': 'hsl(var(--scroll-bar-color) / <alpha-value>)',
      'scroll-thumb-color': 'hsl(var(--scroll-thumb-color) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
}
