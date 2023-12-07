/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `my-gatsby-site`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name:'Home',
        link: '/'
      },
      {
        name: 'Portfolio', 
        link: '/'
      }
    ]
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-styled-components", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};