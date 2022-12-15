module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "10px",
      },
      colors: {
        youtube: "#af2c2c" /* "#FF0000" */,
        twitter: "#1DA1F2",
        twitch: "#6441A4",
        patreon: "#FF424D",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
