import React from 'react';
import TextType from './TextType';
const logo = require('../img/logo-white.png');

const Header = () => (
  <header id="header_background" className="header">
    <div className="header__logo-container">
      <img src={logo} alt="logo" className="header__logo"/>
    </div>
    <div className="header__title-container">
      <h1 className="header__title">
        <span className="header__title--main">The Dapper</span>
        <span className="header__title--main">Developer</span>
        <TextType/>
      </h1>
    </div>
  </header>
);

export default Header;
