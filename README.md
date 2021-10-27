<img src="static/images/logo.svg" height="50px">

**Website for [Execute Big](https://executebig.org), built with [Hugo](https://gohugo.io/).**

---

## Development

To develop this site, you'll need to have [Hugo](https://gohugo.io/getting-started/installing/#quick-install) installed in your environment. 

We also use pnpm instead of npm/yarn at Execute Big. You should install it here: https://pnpm.io. If you opt to use an alternative package manager to manage dependencies, please be sure to clean up the lock files and other temp files before submitting your code for review.

```bash
# Install dependencies
$ pnpm install

# Same as running `hugo server`
$ pnpm dev
```

## Using Archetypes

Hugo utilizes archetypes to create structured content from templates. 

```bash
# To create a new journal entry
$ hugo new --kind journal journals/your-post-name
```

## Acknowledgements

Powered by <a href="https://vercel.com/?utm_source=executebig&utm_campaign=oss" target="_blank"><img src="static/images/sponsors/vercel-dark.svg" height="14px" /></a>

This website is built based on [Hugo Serif Theme](https://themes.gohugo.io/hugo-serif-theme/) by [@jugglerx](https://github.com/jugglerx/).
