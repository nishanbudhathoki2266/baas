/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fcde67",
        secondary: "#5bccf6",
        text: "#030e12",
        maroon: "#A24857",
      },
      fontFamily: {
        openSans: ["var(--font-openSans)"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
