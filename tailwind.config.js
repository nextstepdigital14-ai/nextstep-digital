/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          'navy-dark': '#061324',
          'navy-light': '#122B4D',
          blue: '#087CF0',
          cyan: '#08C5D9',
          light: '#F5F8FC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #087CF0 0%, #08C5D9 100%)',
        'navy-gradient': 'linear-gradient(180deg, #061324 0%, #0B1F3A 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(8, 124, 240, 0.05) 0%, rgba(8, 197, 217, 0.05) 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
