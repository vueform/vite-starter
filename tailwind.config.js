module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './vueform.config.js',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  theme: {
    extend: {
      form: (theme) => ({
        primary: '#07BF9B',
      })
    },
  },
  plugins: [
    require('@vueform/vueform/tailwind'),
  ],
}