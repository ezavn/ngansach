/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        yellow: "#CD9E41",
        yellow2: "#DEBF7F",
        green: "#022618",
        greenLight: "#73C388",
        cream: "#E3C280",
      },
      margin: {
        section: "60px",
        sectionMB: "50px",
      },
      spacing: {
        section: "60px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
