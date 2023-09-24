/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#1E5BAB',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate3d(-40%, 0, 0)' },
          '100%': { transform: 'translate3d(100%, 0, 0)' }
        }
      },
      animation: {
        'spin-slow': 'wiggle 10s linear infinite',
      }
    },
  },
  plugins: [],
}

