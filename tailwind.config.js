const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#a0aec0'
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {},
  plugins: [],
}
