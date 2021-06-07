module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Signika Negative", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 70px 100px -15px rgba(0, 0, 0, 0.3)",
        lgnoblur: "0 -20px 0 15px rgba(255, 255, 255, 0.07)",
      },
      borderRadius: {
        alot: "6rem",
      },
      // borderRadius: {
      //   '4xl': '2rem',
      // },
      // backgroundImage: (theme) => ({
      //   headphones:
      //     "url('https://media.steelseriescdn.com/thumbs/filer_public/c4/a7/c4a75867-a5f6-49c3-88ff-52dec350f6a8/purchase-gallery-arctis-5-2019-black-hero.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png')",
      // }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
