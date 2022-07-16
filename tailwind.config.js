/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      dropShadow:{
        '3xl': '2px 2px 4px rgba(0, 0, 0, 0.25))'
      }
    },
  },
  plugins: [],
}
