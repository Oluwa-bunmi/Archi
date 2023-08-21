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
        overlay: "rgba(0,0,0, .5)",
        lightBg: "rgba(0,0,0, 0.05)",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        garamond: "'Cormorant Garamond', serif",
        dosis: "'Dosis', sans-serif",
      },
      backgroundImage: {
        testimonialBg: "url('../src/assets/testimonialBg.jpg')",
        contactBg: "url('../src/assets/contactBg.jpg')",
        roomsOverlay:
          "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 100%)",
      },
    },
  },
  plugins: [],
};
