import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext;

  if (posts) {
    return (
      <div>
        <div>
          <span>Posts about {tagName}:</span>
        </div>
        <ul>
          {posts.map(post => {
            const { frontmatter: { path, title, date } } = post;
            return (
              <li key={date}>
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

Tags.propTypes = {
  pathContext: PropTypes.object.isRequired,
};

export default Tags;
