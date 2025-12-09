/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#5D5DDC",
        primary10: "#E5E5F6",
        secondary: "#FEA71E"
      }
    },
  },
  plugins: [],
}

