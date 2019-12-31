import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled, {createGlobalStyle} from 'styled-components'

import Provider from '../Theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 100%;
    font-family: 'source-han-sans-traditional', 'Noto Sans TC', 'PingFang TC',
    'Apple LiGothic Medium', Roboto, 'Microsoft JhengHei', 'Lucida Grande',
    'Lucida Sans Unicode', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.primary}
  }
`

const Container = styled.div`
  /* 62px is for Footer */
  height: calc(100vh - 62px);
`

const Header = styled.header`
  background-color: ${props => props.theme.primary};

  .inner {
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
  }

  h1 {
    font-size: 30px;
    margin: 0;
  }

  .link {
    color: white;
    text-decoration: none;
  }

  .subtitle {
    color: ${props => props.theme.sub};
    font-size: 13px;
    font-style: italic;
  }
`

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`

const Footer = styled.footer`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`

const Layout = ({children}) => {
  return (
    <Provider>
      <GlobalStyle />
      <Container>
        <Header>
          <div className="inner">
            <h1>
              <Link className="link" to="/">
                KONEKOYA
              </Link>
            </h1>
            <span className="subtitle">I talk everything about Front-End </span>
            ❤️
          </div>
        </Header>
        <Main>{children}</Main>
      </Container>
      <Footer>Copyright © 2019 konekoya.</Footer>
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Layout
