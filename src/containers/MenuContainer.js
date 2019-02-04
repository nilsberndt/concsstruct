import React, { Component } from 'react';
import Blueprint from '../components/Blueprint';
import BossMessage from '../components/BossMessage';
import '../styles/menu.scss';

import { connect } from 'react-redux';


class MenuContainer extends Component {


  render() {

    return (
      <div className="menu--container">
        <Blueprint />
        <BossMessage message={this.props.bossMessage} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  bossMessage: state.bossMessage,
  proceedButton: state.proceedButton
});

export default connect(mapStateToProps)(MenuContainer);
