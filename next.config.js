const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
  openAnalyzer: false,
})

module.exports = withBundleAnalyzer({
  "env": {
    "URL": "https://thegameofchains.com",
  },
  images: {
    domains: ['https://thegameofchains.com/images1/'],
  },

})