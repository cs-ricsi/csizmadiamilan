module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'anton': 'Anton, regular',
        'himalaya': 'himalaya, regular'
      },
      height: {
        '128': '32rem',
        '152': '38rem',
        '176': '44rem',
        '224': '56rem',
        'fifteen': '15vh',
        'twenty': '20vh',
        'thirty': '30vh',
        'fourty': '40vh',
        'fifty': '50vh',
        'sixty': '60vh',
        'seventy': '70vh',
        'eighty': '80vh',
        'ninety': '90vh'
      },
      maxHeight: {
        'fifty': '50vh',
      },
      backgroundImage: {
        'about-bg': 'url("../assets/photos/about/BACKGROUND.jpg")'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
