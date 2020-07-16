module.exports = {
  siteMetadata: {
    title: `Growing Up Financially`,
    description: `You don't have to wait until your 65+ to retire. Find out how you can start now and do it in less time.`,
    author: `@cdgraham`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
      {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        isUsingColorMode: false
      },
    },
  ],
}
