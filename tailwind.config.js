/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#19ECB7',
      },
      fontFamily: {
        suisse: ['Suisse Intl', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
