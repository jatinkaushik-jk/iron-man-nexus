/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-once': 'spin 0.3s linear',
        'spin-slow': 'spin 2.5s linear infinite',
        'spin-slow-reverse': 'spin 2.5s linear infinite reverse',
      },
      screens: {
        'xs': '500px',
        // => @media (min-width: 500px) { ... }
      }
    },
  },
  plugins: [],
}

