const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
        colors: {
            "nuBlue":"#1A375C",
        },
        fontFamily: {
            sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
        },
        spacing: {
            '72': '18rem',
            '76': '19rem',
            '80': '20rem',
            '88': '22rem',
            '96': '24rem',
            '104': '26rem',
            '112': '28rem',
            '120': '30rem',
            '128': '32rem',
            '136': '34rem',
            '144': '36rem',
            '190': '48rem',
        },
    },
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
}
