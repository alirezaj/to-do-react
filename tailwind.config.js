/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#db4c3f",
        search: "hsla(0,0%,100%,.2)",
      },
      spacing: {
        navbar: "52px",
      },
      boxShadow: {
        menu: '0 1px 8px 0 rgb(0 0 0 / 8%)'
      }
    },
  },
  plugins: [],
};
