/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          500: '#ff2f59',
          700: '##ce023a',
        },
        'secondary': {
          500: '#1acd48',
          700: '#10852f',
        },
        'danger': {
          500: '#ff6363',
          700: '#ff6363',
        },
        'info': {
          500: '#ff6363',
          700: '#ff6363',
        }
      }
    },
  },
  plugins: [],
}

