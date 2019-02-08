import React, { Component } from 'react';
import logo from '../images/concsstruct-logo--header.svg';
import { apprenticeMode, masterMode } from '../actions/actions';
import { connect } from 'react-redux';

class Header extends Component {

  constructor(props) {
    super(props);
    this.apprenticeClick = this.apprenticeClick.bind(this);
    this.masterClick = this.masterClick.bind(this);
    this.onApprenticeMode = this.onApprenticeMode.bind(this);
    this.onMasterMode = this.onMasterMode.bind(this);
  }

  onApprenticeMode(level){
    this.props.onApprenticeMode();
  }

  onMasterMode(level){
    this.props.onMasterMode();
  }

  apprenticeClick(e) {
    e.preventDefault();
    this.props.onApprenticeMode();
  }

  masterClick(e) {
    e.preventDefault();
    this.props.onMasterMode();
  }

  render() {

    return (
      <header className="app--header">
        <div className="app--header__high-score">
          <h4>HIGH SCORE</h4>
          <h2>{this.props.high}</h2>
        </div>
        <img src={logo} className="app--header__logo" alt="ConCSStruct" />
        <div className="app--header__nav">
          <button onClick={this.apprenticeClick}>Apprentice</button>
          <button onClick={this.masterClick}>Master</button>
        </div>
      </header>
    );
  }
}

const mapActionsToProps = {
  onApprenticeMode: apprenticeMode,
  onMasterMode: masterMode
};

const mapStateToProps = state => ({
  level: state.level,
});

export default connect(mapStateToProps, mapActionsToProps)(Header);