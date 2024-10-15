/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        abu: "#5E6F76",
        orange: "#FF801A",
        hijau: "#91BF77",
      },
    },
  },
  plugins: [],
};
