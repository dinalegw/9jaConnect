/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        'nigeria-green': '#008751',
        'nigeria-green-dark': '#006d42'
      }
    },
  },
  plugins: [],
}