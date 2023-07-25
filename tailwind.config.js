/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "rgba(255, 255, 255, 0.5)",
        dark: "rgba(34, 34, 34, .75)",
        brownie: "#bf9156",
        creamy: "rgb(239, 231, 211)",
        borderHr: "rgba(0,0,0,.1)",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        garamond: "'Cormorant Garamond', serif",
      },
      backgroundImage: {
        testimonialBg: "url('../src/assets/testimonialBg.jpg')",
      },
    },
  },
  plugins: [],
};
