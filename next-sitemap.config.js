/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://woodooalda.cz',
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/test-page'],
  sitemapSize: 5000,
};
