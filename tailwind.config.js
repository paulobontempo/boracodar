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
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        lato: ['lato', 'sans-serif'],
        crimsonPro: ['Crimson Pro'],
      },

      colors: {
        background: '#0F0D13',
        header: '#E1E1E6;',
        container: '#2A2141;',
        numbers: '#C4C4CC;',
        numbersNext: '#D9D9D9;',
        P002bg: '#D9CDF7;',
        P002Heading: '#271A45;'

      }
    },
  },
  plugins: [],
}
