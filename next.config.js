const { i18n } = require('./next-i18next.config')

module.exports = {
  async rewrites() {
    return [
      {
        source: '/0',
        destination: '/',
      },
    ];
  },
  i18n,
  reactStrictMode: true,
  // Required by Next i18n with API routes, otherwise API routes 404 when fetching without trailing slash
  trailingSlash: true
  
}

