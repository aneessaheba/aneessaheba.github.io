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
        'primary': '#ffffff',
        'secondary': '#a0a0a0',
        'accent': '#e0e0e0',
      },
    },
  },
  plugins: [],
}
