import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import { theme } from '../utils/const';

injectGlobal`
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
`;

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Konekoya"
        meta={[
          { name: 'description', content: 'Sample' },
          {
            name: 'keywords',
            content: 'Frontend, React, Redux, CSS, JavaScript, HTML',
          },
        ]}
      />
      <Header />
      <Container>{children()}</Container>
      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
