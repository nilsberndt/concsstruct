import React, { Component } from 'react';
import logo from '../images/concsstruct-logo--header.svg';
import { setInitials, setFBInitials, setHighScore, apprenticeMode, masterMode, toggleHighScoreWindow } from '../actions/actions';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database';


const config = {
  apiKey: "AIzaSyCP7lv7w2ZGhRKYTBNAFuOKo0ndSKC3lpc",
  authDomain: "concsstruct.firebaseapp.com",
  databaseURL: "https://concsstruct.firebaseio.com",
  projectId: "concsstruct",
  storageBucket: "concsstruct.appspot.com",
  messagingSenderId: "44526916579"
};
firebase.initializeApp(config);

var firebaseScore = firebase.database().ref('/high-score/score');
var firebasePlayer = firebase.database().ref('/high-score/player');
var getInitials = "";
var getScore = 0;

firebaseScore.on('value', function(snapshot) {
  getScore = snapshot.val();
});

firebaseScore.once('value').then(function(snapshot){
  getScore = snapshot.val();
});

firebasePlayer.on('value', function(snapshot) {
  getInitials = snapshot.val();
});

firebasePlayer.once('value').then(function(snapshot){
  getInitials = snapshot.val();
});

class Header extends Component {

  constructor(props) {
    super(props);
    this.apprenticeClick = this.apprenticeClick.bind(this);
    this.masterClick = this.masterClick.bind(this);
    this.onApprenticeMode = this.onApprenticeMode.bind(this);
    this.onMasterMode = this.onMasterMode.bind(this);
    this.onSetHighScore = this.onSetHighScore.bind(this);
    this.onToggleHighScoreWindow = this.onToggleHighScoreWindow.bind(this);
    this.onSetInitials = this.onSetInitials.bind(this);
    this.onSetFBInitials = this.onSetInitials.bind(this);
  }

  onToggleHighScoreWindow(current){
    this.props.onToggleHighScoreWindow(current);
  }

  onSetHighScore(highScore){
    this.props.onSetHighScore(highScore);
  }

  onApprenticeMode(level){
    this.props.onApprenticeMode();
  }

  onMasterMode(level){
    this.props.onMasterMode();
  }

  onSetInitials(initials){
    this.props.onSetInitials(initials);
  }

  onSetFBInitials(initials){
    this.props.onSetInitials(initials);
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

    if (this.props.highScore === 0 || this.props.firebaseInitials === ""){
      return (
        <header className="app--header">
          <div className="app--header__high-score">
            <h4>HIGH SCORE</h4>
            <h5>loading...</h5>
          </div>
          <img src={logo} className="app--header__logo" alt="ConCSStruct" />
          <div className="app--header__nav">
            <button onClick={this.apprenticeClick}>Apprentice</button>
            <button onClick={this.masterClick}>Master</button>
          </div>
        </header>
      );
    }else{
      return (
        <header className="app--header">
          <div className="app--header__high-score">
            <h4>HIGH SCORE</h4>
            <h5>{this.props.highScore} - {this.props.firebaseInitials}</h5>
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


  componentDidMount(){
    this.interval = setInterval(() => {
      if (this.props.highScore !== getScore || 
          this.props.firebaseInitials !== getInitials){
        this.props.onSetHighScore(getScore);
        this.props.onSetFBInitials(getInitials);
      }
      if (this.props.highScore === this.props.score &&
          this.props.userInitials !== getInitials){
        firebasePlayer.set(this.props.userInitials);
      }
      if (this.props.score > this.props.highScore){
        firebaseScore.set(this.props.score);
        firebasePlayer.set(this.props.userInitials);
        this.props.onToggleHighScoreWindow(false);
      }
    }, 1500);
    
  }


}

const mapActionsToProps = {
  onApprenticeMode: apprenticeMode,
  onMasterMode: masterMode,
  onSetHighScore: setHighScore,
  onToggleHighScoreWindow: toggleHighScoreWindow,
  onSetInitials: setInitials,
  onSetFBInitials: setFBInitials
};

const mapStateToProps = state => ({
  level: state.level,
  score: state.score,
  highScore: state.highScore,
  userInitials: state.userInitials,
  firebaseInitials: state.firebaseInitials
});

export default connect(mapStateToProps, mapActionsToProps)(Header);