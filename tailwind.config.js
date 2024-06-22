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
          500: '#843dff',
          700: '#6b04fd',
        },
        'secondary': {
          500: '#ff2949',
          700: '#ff2949',
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

