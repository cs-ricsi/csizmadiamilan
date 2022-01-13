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
        '224': '56rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
