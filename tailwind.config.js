/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        br: {
          50: "#d9f7ff",
          100: "#ade6ff",
          200: "#7fdafb",
          300: "#50d1f8",
          400: "#24cbf5",
          500: "#0ab9db",
          600: "#0085ab",
          700: "#00577c",
          800: "#3F6699",
          900: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
