import React, { Component } from 'react';
import logo from '../images/concsstruct-logo--header.svg';
import '../styles/app.scss';




class Header extends Component {


  render() {

    return (
      <header className="app--header">
        <img src={logo} className="app--header__logo" alt="ConCSStruct" />
      </header>
    );
  }
}


export default Header;