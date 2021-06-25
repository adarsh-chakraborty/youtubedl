module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'customFont': ['Dela Gothic One']
      },
      backgroundImage: theme => ({
        'youtube-logo': "url('logo.svg')",
       }),
       backgroundSize: {
       '20vh': '20vh',
       '30vh': '30vh',
       '40vh': '40vh',
       '30%': '30%',
       '40%': '40%',
       '50%': '50%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
