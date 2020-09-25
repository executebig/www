module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: ["layouts/**/*.html"],
      whitelist: [
        "highlight",
        "pre",
        "code",
        "content",
        "h3",
        "h4",
        "ul",
        "li",
        "table",
        "blockquote",
        "page",
        "page-home",
        "lock-scroll",
        "open",
      ],
      whitelistPatternsChildren: [
        /^hamburger(-)?/,
        /^main-menu(-)?/,
        /^content/,
        /^sponsors/,
        /^(spinner)(-)?/,
        /^donationContainer/,
        /^carousel/,
      ],
    },
    autoprefixer: {},
    cssnano: { preset: "default" },
  },
};
