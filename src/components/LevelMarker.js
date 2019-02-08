import React, { Component } from 'react';
import CountdownTimer from './CountdownTimer';
import ScoreCard from './ScoreCard';

class LevelMarker extends Component {
  render() {
    return (
      <div className="world--level-marker">
        <ScoreCard />
        <div className="world--level-marker-text">
          <h2 className="effect--pump">{this.props.text}</h2>
          <h3>{this.props.phase}</h3>
        </div>
        <CountdownTimer />
      </div>
    );
  }
}



export default LevelMarker;