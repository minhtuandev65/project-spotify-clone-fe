/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // Shadow ở phía dưới (default)
        "custom-bottom": "0 4px 12px rgba(0, 0, 0, 0.25)",
        // Shadow ở phía trên
        "custom-top": "0 -4px 12px rgba(0, 0, 0, 0.25)",
        // Light mode phiên bản trắng
        "custom-top-bottom-white":
          "0 -4px 12px rgba(255, 255, 255, 0.15), 0 4px 12px rgba(255, 255, 255, 0.15)",
        "custom-card": "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "480px",
      },
      fontFamily: {
        times: ['"Times New Roman"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
