module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './[posts]/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        handwritten: 'Virgil',
      },
      colors: {
        gray: {
          850: '#18202F',
          950: '#0b0f1a',
        },
      },
      screens: {
        '1.5xl': '1440px',
      },
    },
  },
  plugins: [require('tailwindcss-radix')(), require('@tailwindcss/typography')],
}
