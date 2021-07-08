module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ex-white': '#f4e8f0',
        'ex-pink': '#f1b1d0',
        'ex-sky': '#b3daed',
        'ex-gray': '#c4bdaa',
        'ex-black': '#2a2527',
        'ex-brown': '#cb9583',
        'ex-red': '#de4638',
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"]
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
