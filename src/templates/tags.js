import React from 'react';
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

export default Tags;
