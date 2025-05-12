/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F7FA',
          100: '#DEF0F7',
          200: '#B3E0EF',
          300: '#87CEDF',
          400: '#5CBACE',
          500: '#3A96AC',
          600: '#1A3B5A',
          700: '#14304A',
          800: '#0E233A',
          900: '#091729',
        },
        secondary: {
          50: '#E5F9F7',
          100: '#CCEEE8',
          200: '#99DCD3',
          300: '#66C9BD',
          400: '#33B7A8',
          500: '#20B2AA',
          600: '#1A8F88',
          700: '#156C66',
          800: '#104844',
          900: '#0A2422',
        },
        accent: {
          50: '#FFF4EA',
          100: '#FFE8D5',
          200: '#FFD1AC',
          300: '#FFBB82',
          400: '#FFA457',
          500: '#FF8C38',
          600: '#FF7326',
          700: '#F65A00',
          800: '#C24700',
          900: '#8F3400',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};