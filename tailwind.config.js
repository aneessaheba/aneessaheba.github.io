/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#f04e2a',
        'secondary': '#ff6b35',
        'accent': '#e83318',
      },
    },
  },
  plugins: [],
}
