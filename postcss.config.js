module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: { preset: "default" },
    '@fullhuman/postcss-purgecss': {
      content: ['./**/*.html', './**/*.js'],
    }
  },
};
