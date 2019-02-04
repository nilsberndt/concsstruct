import React, { Component } from 'react';
import WorldContainer from './WorldContainer';
import MenuContainer from './MenuContainer';
import '../styles/app.scss';

class MainContent extends Component {
  render() {
    return (
      <div className="app--content">
        <WorldContainer />
        <MenuContainer />
      </div>
    );
  }
}

export default MainContent;