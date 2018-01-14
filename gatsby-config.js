module.exports = {
  pathPrefix: 'blog',
  siteMetadata: {
    title: `Learning path of Joshua`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
