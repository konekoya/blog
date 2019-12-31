import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const AllTags = ({pageContext}) => {
  const {tags} = pageContext

  if (tags) {
    return (
      <div>
        <ul>
          {tags.map(tag => {
            return (
              <li key={tag}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

AllTags.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default AllTags
