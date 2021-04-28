import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import ThemeWrapper from '../Theme'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-size: 100%;
    font-family: 'Varela Round', sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary.main}
  }
`

const Container = styled.div`
  /* 62px is for Footer */
  min-height: calc(100vh - 62px);
`

const Header = styled.header`
  .inner {
    margin: 0 auto;
    max-width: 980px;
    padding: 20px;
    text-align: center;
    padding: 100px 0;
  }

  h1 {
    font-size: 80px;
    margin: 0;
    font-weight: 500;
  }

  .link {
    color: ${(props) => props.theme.text.primary};
    text-decoration: none;
    position: relative;

    &:before {
      content: '';
      width: 43px;
      height: 6px;
      background: ${(props) => props.theme.primary.main};
      display: block;
      position: absolute;
      left: 12px;
      bottom: 10px;
    }
  }

  .subtitle {
    color: ${(props) => props.theme.text.light};
    font-size: 13px;
    font-style: italic;
  }
`

const Main = styled.main`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`

const Layout = ({ children }) => {
  return (
    <ThemeWrapper>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700i,900,900i&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Container>
        <Header>
          <div className="inner">
            <h1>
              <Link className="link" to="/">
                konekoya
              </Link>
            </h1>
            <span className="subtitle">Talks mostly about Front-End </span>
          </div>
        </Header>
        <Main>{children}</Main>
      </Container>
    </ThemeWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Layout
