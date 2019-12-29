import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
`

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Container
