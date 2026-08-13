/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090a",
        surface: "#12141c",
        "surface-hover": "#1a1d2a",
        "surface-border": "#222638",
        brand: {
          violet: "#8b5cf6",
          cyan: "#06b6d4",
          pink: "#ec4899",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glow-gradient": "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)",
      },
    },
  },
  plugins: [],
};