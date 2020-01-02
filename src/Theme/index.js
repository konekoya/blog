import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

const theme = {
  primary: {
    light: '#8848ff',
    main: '#420afb',
    dark: '#0000c6',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
    contrastText: '#000',
  },
  black: {
    primary: '#1c1e2d',
    light: '#434556',
    dark: '#000002',
    contrastText: '#fff',
  },
  text: {
    primary: '#1c1e2d',
    secondary: '#434556',
  },
  hr: '#dedede',
}

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeWrapper
