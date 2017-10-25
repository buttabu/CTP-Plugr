require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(
  {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT || 8000,
    app: {
      title: 'Plugr',
      description: 'Plugr: Centralized platform to connect soccer leagues, teams, and players',
      head: {
        titleTemplate: 'React Redux Example: %s',
        meta: [
          { name: 'description', content: 'Plugr: Centralized platform to connect soccer leagues, teams, and players' },
          { charset: 'utf-8' },
          { property: 'og:site_name', content: 'Plugr' },
          { property: 'og:image', content: '' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:title', content: 'Plugr' },
          { property: 'og:description', content: 'Plugr: Centralized platform to connect soccer leagues, teams, and players' },
          { property: 'og:card', content: 'summary' },
          { property: 'og:site', content: '@enzoames' },
          { property: 'og:creator', content: '@enzames' },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' }
        ]
      }
    }
  },
  environment
);
