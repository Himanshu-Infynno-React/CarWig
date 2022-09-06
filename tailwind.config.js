/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Poppins': ['Poppins', 'sans-serif']
      },
      dropShadow : {
        "textShadow" : "0px 2px 4px rgba(0, 0, 0, 0.13)"
      },
      boxShadow : {
        "btnShadow" : " 0px 8px 16px -6px rgba(254, 110, 6, 0.46)",
        "cardShadow" : " 0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
        "specsShadow" : "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)"
      },
      backgroundColor : {
        "linearGradient" : "linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)"
      }
    },
  },
  plugins: [],
}
