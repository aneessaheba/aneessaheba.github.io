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
        'primary': '#6366f1',
        'secondary': '#8b5cf6',
        'accent': '#ec4899',
      },
    },
  },
  plugins: [],
}