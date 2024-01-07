/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ahmedm.tech",
  generateRobotsTxt: true,
  exclude: ["/favicon.ico", "/sitemap", "/robots.txt", "/api/*"],
};
