/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `James McDonell`,
    description: `James McDonell's CV`,
    author: `James McDonell`,
  },
  plugins: [
    "gatsby-plugin-better-jss",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-pages`,
    //     path: `${__dirname}/src/markdown-pages`,
    //   },
    // },
    `gatsby-transformer-remark`,
  ],
}
