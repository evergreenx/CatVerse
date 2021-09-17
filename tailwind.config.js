module.exports = {
 
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        primary: "#FB9333",
        'basic-black':'#575757',
        'hero-action':' #FFF0DC',
        'black-text':' #828282',
        'testimonial-bg' : '#FFF8ED'
        
        
      },

      fontFamily: {
        sansx: "Montserrat",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
