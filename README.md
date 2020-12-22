<img src="static/images/logo.svg" height="50px">

**Website for [Execute Big](https://executebig.org), built with [Hugo](https://gohugo.io/).**

---

This website is built based on [Hugo Serif Theme](https://themes.gohugo.io/hugo-serif-theme/) by [@jugglerx](https://github.com/jugglerx/).

## Setting Up

### Payment & Donation

We use [Stripe Checkout](https://stripe.com) as our payment gateway, and Stripe requires a server to generate payment intents. We use a [Vercel Serverless Function](/api/donate.js) to achieve this. 

In order to make the payment gateway work, make sure a Stripe API key is set in your environment variables.

```
STRIPE_API_KEY=sk_live_xxx...
```

### Search

We use [Algolia](https://algolia.com) as our search provider. Algolia reloads the index set at `ALGOLIA_INDEX_NAME` when the site is built, as the file set at `ALGOLIA_INDEX_FILE` is updated. 

In order to make the search system work, make sure Algolia-related environment variables are set.

```
ALGOLIA_APP_ID=xxxxxxxxxx
ALGOLIA_ADMIN_KEY=xxxxxxxxxxxxxxxxxxxxxxx
ALGOLIA_INDEX_NAME=dev_xxxxxx
ALGOLIA_INDEX_FILE=public/algolia.json
```

## Using Archetypes

Hugo utilizes archetypes to create structured content from templates. 

```
# To create a new journal entry
$ hugo new --kind journal journals/your-post-name
```

---

Powered by <a href="https://vercel.com/?utm_source=executebig&utm_campaign=oss" target="_blank"><img src="static/images/sponsors/vercel-dark.svg" height="14px" /></a>