// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.24)',
      },
      colors: {
        accent: {
          50: '#eefdf6',
          100: '#d4f8e5',
          500: '#18b26b',
          600: '#10965a',
          700: '#0d7a49',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        glow: 'radial-gradient(circle at top, rgba(24, 178, 107, 0.25), transparent 35%)',
      },
    },
  },
  plugins: [],
};
