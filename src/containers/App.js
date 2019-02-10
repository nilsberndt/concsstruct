import React, { Component } from 'react';
import Header from '../components/Header';
import MainContent from './MainContent';
import HighScore from '../components/HighScore';
import '../styles/app.scss';


class App extends Component {

  render() {
    return (
      <div className="app--page">
        <Header />
        <HighScore />
        <MainContent />
      </div>
    );
  }
}


export default App;