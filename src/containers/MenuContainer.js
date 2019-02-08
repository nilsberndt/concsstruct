import React, { Component } from 'react';
import Blueprint from '../components/Blueprint';
import BossMessage from '../components/BossMessage';


class MenuContainer extends Component {


  render() {

    return (
      <div className="menu--container">
        <Blueprint />
        <BossMessage />
      </div>
    );
  }
}

export default MenuContainer;
