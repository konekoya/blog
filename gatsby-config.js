module.exports = {
  pathPrefix: "blog",
  siteMetadata: {
    title: "Learning path of Joshua"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              showLineNumbers: true
            }
          },
          {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "src",
              path: `${__dirname}/src`
            }
          }
        ]
      }
    }
  ]
};
