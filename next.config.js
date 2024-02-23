const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
  openAnalyzer: false,
})

module.exports = withBundleAnalyzer({
  "env": {
    "URL": "https://www.flooringartists.in",
  },
  images: {
    domains: ['https://www.flooringartists.in/images1/'],
  },

})