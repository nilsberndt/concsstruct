import React, { Component } from 'react';
import { updateBlueprint, completeLevel, addScore } from '../actions/actions';
import { connect } from 'react-redux';
import { globalTimeout } from './CountdownTimer';


class Blueprint extends Component {

  constructor(props) {
    super(props);

    this.onCompleteLevel = this.onCompleteLevel.bind(this);
    this.onUpdateBlueprint = this.onUpdateBlueprint.bind(this);
    this.onAddScore = this.onAddScore.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }



  onUpdateBlueprint(event) {
    const updateString = event.target.value.toString();
    const cleanString = updateString.replace(
      // eslint-disable-next-line
      /(script|input|span|textarea|video|link|embed|data|audio|doctype|DOCTYPE|img|bldgpart|Bldgpart|div|button|document|href|iframe|(\<a)|html|body|head|(\<i))/gm,
      "_INVALID_ ");

    this.props.onUpdateBlueprint(cleanString);
    if (cleanString.trim().replace(/[\n\f\r\t]/g, "") === this.props.exampleRow.trim().replace(/[\n\f\r\t]/g, "")
      && !this.props.levelComplete) {
      setTimeout(() => this.onCompleteLevel(this.props.level), 200);
    }
  }

  handleKeyPress = (e) => {
    if (e.key === "PageUp" && !this.props.levelComplete) {
      this.onCompleteLevel(this.props.level);
    }
  }

  onAddScore(theScore, theLevel, theTime, theHighScore){
    this.props.onAddScore(theScore, theLevel, theTime, theHighScore);
  }

  onCompleteLevel(level) {
    clearTimeout(globalTimeout);
    this.props.onCompleteLevel(level);
    if (level > 5 && !this.props.gameOver){
      this.props.onAddScore(this.props.score, this.props.level, this.props.timeRemaining, this.props.highScore);
    }
  }


  render() {
    return (
      <div className="menu--blueprint-container">
        <textarea
          onKeyDown={this.handleKeyPress} 
          className="menu--blueprint__textarea"
          value={this.props.userRow}
          rows="7"
          spellCheck="false"
          maxLength="1500"
          onChange={this.onUpdateBlueprint} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  level: state.level,
  userRow: state.userRow,
  exampleRow: state.exampleRow,
  levelComplete: state.levelComplete,
  score: state.score,
  timeRemaining: state.timeRemaining,
  highScore: state.highScore,
  gameOver: state.gameOver
});

const mapActionsToProps = {
  onUpdateBlueprint: updateBlueprint,
  onCompleteLevel: completeLevel,
  onAddScore: addScore
};

export default connect(mapStateToProps, mapActionsToProps)(Blueprint);

