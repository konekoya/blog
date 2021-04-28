import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Post = styled.div`
  margin-bottom: 80px;

  h2 {
    margin: 8px 0;
    font-family: 'Varela Round', sans-serif;
    font-weight: normal;
    font-size: 26px;

    a {
      color: ${(props) => props.theme.text.primary};
    }
  }

  .meta {
    display: flex;
  }

  .date {
    margin: 0;
    margin-right: 30px;
    color: ${(props) => props.theme.text.secondary};
  }

  .tags {
    display: flex;
    list-style: none;

    li {
      margin-right: 10px;
    }

    a {
      color: ${(props) => props.theme.primary.main};
      font-weight: 900;
    }
  }

  .excerpt {
    line-height: 2;
    color: ${(props) => props.theme.text.secondary};
  }
`

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const sortByDate = (a, b) =>
    new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)

  return (
    <Layout>
      {posts.sort(sortByDate).map(({ node: post }) => {
        const {
          frontmatter: { date, path, title, excerpt, tags },
        } = post
        return (
          <Post key={title}>
            <h2>
              <Link to={path}>{title}</Link>
            </h2>
            <div className="meta">
              <p className="date">{date}</p>
              <ul className="tags">
                {tags.map((tag, index) => {
                  return (
                    <li key={tag}>
                      <Link to={`/tags/${tag}`}>{tag.toUpperCase()}</Link>
                      {index < tags.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
            </div>

            <p className="excerpt">{excerpt}</p>
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
