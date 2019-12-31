import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'styled-components'

const theme = {
  primary: '#2c3da7',
  sub: '#9da9f7',
}

const Provider = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider
