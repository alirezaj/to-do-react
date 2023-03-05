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
    },
  },
  plugins: [],
};
