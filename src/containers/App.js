import React, { Component } from 'react';
import Header from '../components/Header';
import MainContent from './MainContent';
import '../styles/app.scss';
import { connect } from 'react-redux';


class App extends Component {

  render() {
    return (
      <div className="app--page">
        <Header high={this.props.highScore}></Header>
        <MainContent />
      </div>
    );
  }

  componentDidMount(){
    return (
      <div className="app--page">
        <Header high="0"></Header>
        <MainContent />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  highScore: state.highScore
});

export default connect(mapStateToProps)(App);