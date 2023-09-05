/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundColor: {
        footer: "#111111",
        main: "#8A33FD",
        secondary: "#F6F6F6",
        icon: "#807D7E",
      },
      textColor: {
        secondary: "#8A8989",
      },
      keyframes: {
        "animate-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "animate-fade-in 0.2s ease-out  backwards",
      },
    },
  },
  plugins: [],
};
