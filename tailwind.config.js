/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl': '0 10px 15px rgba(255, 20, 20, 0.2)'
      }
    },
  },
  plugins: [],
}