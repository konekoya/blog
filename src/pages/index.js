import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const Tags = styled.div`
  display: flex;
  list-style: none;

  li {
    padding: 8px 12px;
    background-color: #eee;
    margin-right: 10px;
    border-radius: 4px;
    a {
      color: black;
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
          <div key={date}>
            <h2>
              <Link to={path}>{title}</Link>
            </h2>
            <p>{date}</p>
            <p>{excerpt}</p>
            <Tags>
              {tags.map(tag => {
                return (
                  <li key={tag}>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                )
              })}
            </Tags>
          </div>
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
