/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        screenWhite: '#FAFAFA',
        offWhite: '#A1A1AA'
      },
      fontFamily: {
        Satoshi: ["Satoshi"],
      }
    },
  },
  plugins: [],
}