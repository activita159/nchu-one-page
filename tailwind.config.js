/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
      colors: {
        pop: {
          pink: '#ff4f9a',
          orange: '#ff8a3d',
          blue: '#205bff',
          lime: '#b7ff3c',
          ink: '#141414',
          mist: '#f5f5f2',
        },
      },
      boxShadow: {
        pop: '0 24px 70px rgba(20, 20, 20, 0.12)',
      },
    },
  },
  plugins: [],
};
