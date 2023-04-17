module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        "dark-background": "rgba(0,26,55,255)",
      },
    },
  },
  variants: {},
  plugins: [],
};
