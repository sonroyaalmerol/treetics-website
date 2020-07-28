const { backendURL } = require('./utils/constants');

const withFonts = require('next-fonts');
module.exports = withFonts({
  async rewrites() {
    return [
      { source: '/wp-admin/:path*', destination: `${backendURL}/wp-admin/:path*` }
    ]
  }
});