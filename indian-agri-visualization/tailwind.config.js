// tailwind.config.js
module.exports = {
    darkMode: 'class', // This is the crucial line for theme switching
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }