/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css}", // Include all relevant file types
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: { 900: "#1E1E1E", 800: "#1B1E20" },
      pink: { 900: "#ED145B" },
      blue: { 22: "#0078D4" },
    },
    fontFamily: {
      sans: ["Arial", "sans-serif"],
    },
  },
  plugins: [],
};
