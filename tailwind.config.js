/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",       // azul oscuro elegante
        secondary: "#F1F5F9",     // gris claro
        text: "#334155",          // gris neutro oscuro
        accent: "#D4AF37",        // dorado suave
        light: "#FFFFFF",         // blanco
      },
    },
  },
  plugins: [],
};
