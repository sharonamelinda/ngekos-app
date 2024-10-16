/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        'ngekos-gray': "#5E6F76",
        'ngekos-orange': "#FF801A",
        'ngekos-green': "#91BF77",
      },
    },
  },
  plugins: [],
};
