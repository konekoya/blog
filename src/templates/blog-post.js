import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const Template = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pageContext

  return (
    <Layout>
      <h1>{title}</h1>
      <h3>{date}</h3>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <p>
        {prev && (
          <Link to={prev.frontmatter.path}>
            Previous: {prev.frontmatter.title}
          </Link>
        )}
      </p>
      <p>
        {next && (
          <Link to={next.frontmatter.path}>Next: {next.frontmatter.title}</Link>
        )}
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

Template.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default Template
