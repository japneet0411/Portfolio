module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        pattern: "url('./images/about.jpg')",
      }),
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      lightBlack: "#082032",
    }),
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
