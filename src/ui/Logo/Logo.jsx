import React from 'react';

import './Logo.scss';
import logo from '../../images/logo.svg';

export const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <svg className="logo__svg">
          <use xlinkHref={logo + "#logo"}/>
        </svg>
        <p className="logo__dom">Дом</p>
      </a>
    </div>
  )
}

export default Logo