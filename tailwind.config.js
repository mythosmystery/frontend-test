module.exports = {
   mode: 'jit',
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            brand: {
               DEFAULT: '#006450',
               button: '#191414',
               dark: '#005040',
               pink: '#ffcdd2'
            }
         }
      }
   },
   variants: {
      extend: {}
   },
   plugins: []
};
