import React, { Component } from 'react';
import boss from '../images/boss.svg';
import { advanceLevel } from '../actions/actions';
import { connect } from 'react-redux';


class BossMessage extends Component {

  constructor(props) {
    super(props);

    this.onAdvanceLevel = this.onAdvanceLevel.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onAdvanceLevel(theLevel, theTime, theScore, theHighScore) {
    this.props.onAdvanceLevel(theLevel, theTime, theScore, theHighScore);
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.props.gameOver){
      this.onAdvanceLevel(this.props.level, this.props.timeRemaining,this.props.score, this.props.highScore);
    }else{
      this.onAdvanceLevel(999, this.props.timeRemaining,this.props.score, this.props.highScore);
    }
   
  }


  render() {

    return (
      <div className="menu--boss-message-container">
        <div className="menu--boss-message__text-container">
          <div className="menu--boss-message__text">
            <div dangerouslySetInnerHTML={{ __html: this.props.bossMessage }} />
          </div>
            <button
              style={this.props.proceedButton}
              onClick={this.handleClick}>BEGIN</button>
        </div>
        <div className="menu--boss-message__boss-container">
          <img src={boss} className="menu--boss-message__boss" alt="The Boss" />
        </div>
      </div>
    );
  }


}

const mapActionsToProps = {
  onAdvanceLevel: advanceLevel
};

const mapStateToProps = state => ({
  level: state.level,
  bossMessage: state.bossMessage,
  proceedButton: state.proceedButton,
  timeRemaining: state.timeRemaining,
  score: state.score,
  gameOver: state.gameOver,
  highScore: state.highScore
});

export default connect(mapStateToProps, mapActionsToProps)(BossMessage);