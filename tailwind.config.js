module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'anton': 'Anton, regular',
        'himalaya': 'himalaya, regular'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
