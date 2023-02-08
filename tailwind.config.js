/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#7A4B4B',
        'light-brown' : '#BF722E',
        'medium-brown' : '#916060',
        'box': '#f2eae6'
      },
      fontFamily: {
         'code' : ['Fira Code','sans-serif'],
         'inter': ['Inter', 'sans-serif']
      },fontSize: {
        dynamic: "clamp(40px, 4vw, 80px)",
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}