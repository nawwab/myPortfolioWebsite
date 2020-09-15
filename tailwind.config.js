const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
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
