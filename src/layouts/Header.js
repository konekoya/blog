import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Container from './Container';
import { theme } from '../utils/const';

const HeaderWrapper = styled.div`
  background-color: ${theme.primary};
  margin-bottom: 20px;
`;

const HeaderInner = styled(Container)`
  padding: 20px;
`;

const H1 = styled.h1`
  font-size: 30px;
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Span = styled.span`
  color: ${theme.sub};
  font-size: 13px;
  font-style: italic;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
      <H1>
        <StyledLink to="/">Konekoya</StyledLink>
      </H1>
      <Span>I talk everything about Front-End</Span>
    </HeaderInner>
  </HeaderWrapper>
);

export default Header;
