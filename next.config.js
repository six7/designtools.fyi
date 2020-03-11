const withMDX = require('@next/mdx')()

module.exports = withMDX({
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
  webpack: (config, { defaultLoaders, isServer, dev }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
      module: 'empty',
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    })

    if (isServer && !dev) {
      const originalEntry = config.entry
      config.entry = async () => {
        const entries = { ...(await originalEntry()) }
        // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/build-rss.js`
        entries['./posts/rss-feed.js'] = './posts/rss-feed.js'
        return entries
      }
    }

    return config
  },
})
