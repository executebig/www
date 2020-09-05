module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['layouts/**/*.html'],
      whitelist: [
        'highlight',
        'pre',
        'code',
        'content',
        'h3',
        'h4',
        'ul',
        'li',
        'table',
        'blockquote',
        'hamburger',
        'hamburger-inner',
        'hamburger-box',
        'page',
        'page-home',
        'lock-scroll','open'
      ],
      whitelistPatternsChildren: [/^hamburger?/, /^(main-menu)(-)?/, /^content/, /^sponsors/]
    },
    autoprefixer: {},
    cssnano: { preset: 'default' }
  }
}