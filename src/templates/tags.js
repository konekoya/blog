import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Layout from '../components/Layout'

const Tags = ({pageContext}) => {
  const {posts, tagName} = pageContext

  if (posts) {
    return (
      <Layout>
        <div>
          <span>Posts about {tagName}:</span>
        </div>
        <ul>
          {posts.map(post => {
            const {
              frontmatter: {path, title, date},
            } = post
            return (
              <li key={date}>
                <Link to={path}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}

Tags.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Tags
