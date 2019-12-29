import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import Container from './Container'
import Header from './Header'
import Footer from './Footer'
import { theme } from '../utils/const'

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
    color: ${theme.primary}
  }
`

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Layout
