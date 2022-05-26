// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#1E3A8A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
