/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    screen: {
      '2xlMax': { max: '1535px' },

      xlMax: { max: '1279px' },

      lgMax: { max: '1023px' },

      mdMax: { max: '767px' },

      smMax: { max: '639px' }
    },
    extend: {
      backgroundImage: {
        'main-homepage': "url('/src/assets/img1.jpeg')"
      }
    }
  },
  plugins: []
}
