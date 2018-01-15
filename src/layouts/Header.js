import React from 'react';
import Link from 'gatsby-link';

import './Header.css';

const Header = () => (
  <div className="Header">
    <div className="Header-inner">
      <h1>
        <Link to="/">Konekoya</Link>
      </h1>
      <span className="Header__slogan">I talk everything about Front-End</span>
    </div>
  </div>
);

export default Header;
