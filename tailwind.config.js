module.exports = {
  // purge: ['./src/**/*.html', './src/**/*.js'],
  purge: ['./src/**/*.html', "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#4f3cc9',
        'primary-dark': '#4232aa',
        'secondary': '#ffffff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
