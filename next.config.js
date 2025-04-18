
const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  experimental: {
    turbopack: {
      resolveAlias: {
        "pdfjs-dist": "pdfjs-dist/es5/build/pdf.js",
      },
    },
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  swcMinify: false,
});
