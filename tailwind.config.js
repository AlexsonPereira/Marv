/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '425px' }
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      backgroundImage: {
        'main-homepage': "url('/src/assets/1683803188121.jpg')"
      }
    }
  },
  plugins: []
}
