/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        50: '#e1e2f3',
        100: '#b4b6e1',
        200: '#8286ce',
        300: '#5055ba',
        400: '#2b30ab',
        500: '#050c9c',
        600: '#040a94',
        700: '#04088a',
        800: '#030680',
        900: '#01036e',
        A100: '#9d9dff',
        A200: '#6a6aff',
        A400: '#3737ff',
        A700: '#1e1eff',
      },
      black: '#000',
      white: '#fff',
    },
  },
  plugins: [],
};
