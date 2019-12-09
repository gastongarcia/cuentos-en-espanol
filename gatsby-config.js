module.exports = {
  siteMetadata: {
    title: `Cuentos para niños`,
    description: `Cuentos para niños pequeños y adultos.`,
    author: `@GastonGarciaO`,
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `c80da58b21b26ad93ae5e29b41b0c5`,
        previewMode: false,
        disableLiveReload: false,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"],
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
