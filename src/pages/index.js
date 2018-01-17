import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.map(({ node: post }) => {
        const { frontmatter: { date, path, title, excerpt, tags } } = post;
        return (
          <div key={date}>
            <h2>
              <Link to={path}>{title}</Link>
            </h2>
            <p>{date}</p>
            <p>{excerpt}</p>
            <ul>
              {tags.map(tag => {
                return (
                  <li key={tag}>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
