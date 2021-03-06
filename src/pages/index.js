import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const Post = styled.div`
  margin-bottom: 80px;
  padding-bottom: 80px;

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.hr};
  }

  h2 {
    margin: 8px 0;
    font-family: 'Varela Round', sans-serif;
    font-weight: normal;
    font-size: 42px;
  }

  .tags {
    display: flex;
    list-style: none;

    li {
      margin-right: 10px;
    }

    a {
      color: ${props => props.theme.text.secondary};
    }
  }
`

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      {posts.map(({ node: post }) => {
        const {
          frontmatter: { date, path, title, excerpt, tags },
        } = post
        return (
          <Post key={date}>
            <ul className="tags">
              {tags.map(tag => {
                return (
                  <li key={tag}>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                )
              })}
            </ul>
            <h2>
              <Link to={path}>{title}</Link>
            </h2>
            <p>{date}</p>
            <p>{excerpt}</p>
          </Post>
        )
      })}
    </Layout>
  )
}

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
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
