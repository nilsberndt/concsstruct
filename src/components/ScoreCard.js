import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreCard extends Component {

  render() {
    if (this.props.level > 5){
      return (
        <div className="world--score-text">
          <h4>SCORE</h4>
          <h2>{this.props.score}</h2>
        </div>
      );
    } else{
      return null;
    }
  }
}

const mapStateToProps = state => ({
  score: state.score,
  level: state.level
});

export default connect(mapStateToProps)(ScoreCard);