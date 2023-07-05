/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "rgba(255, 255, 255, 0.5)",
        brownie: "#bf9156",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        garamond: "'Cormorant Garamond', serif",

      },
    },
  },
  plugins: [],
};
