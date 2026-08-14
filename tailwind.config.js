/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#F3E5AB',
          500: '#D4AF37',
          600: '#C5A059',
          700: '#9B7B30',
        },
        dark: {
          900: '#070709',
          800: '#0C0D11',
          700: '#14151B',
          600: '#1C1E26',
          500: '#262934',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.35em',
      }
    },
  },
  plugins: [],
}
