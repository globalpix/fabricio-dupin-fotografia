const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Fabrício Dupin - Fotografia`,
    description: `Site do fotógrafo Fabricio Dupin`,
    author: `@gatsbyjs`,
  },
  plugins: [

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },

    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-web-font-loader',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Oswald']
        },
    }, 
  }, 
  `gatsby-plugin-prefetch-google-fonts`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            variants: [`300`, `500`, `700`]
          },
        ]
      }
    },

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 65,
        jpegProgressive:true,
      },
    },

    

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fabrício Dupin`,
        short_name: `Fabrício Dupin`,
        start_url: `/`,
        background_color: `#154677`,
        theme_color: `#154677`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
