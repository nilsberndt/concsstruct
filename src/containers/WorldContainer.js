import React, { Component } from 'react';
import LevelMarker from '../components/LevelMarker';
import BuildingRows from '../components/BuildingRows';
import Vehicles from '../components/Vehicles';
import { connect } from 'react-redux';

class WorldContainer extends Component {

  render() {
    let completeStyle = "";
    if (this.props.levelComplete) {
      completeStyle = (<div className='world--container-dark'></div>);
    } else {
      completeStyle = "";
    }

    var gamePhase = "APPRENTICE";
    if (this.props.level > 5) {
      gamePhase = "MASTER";
    };
    if (this.props.level === 0 || this.props.levelComplete){
      gamePhase = "";
    }

    return (
      <div className="world--container">
        {completeStyle}
        <LevelMarker 
            text={this.props.levelMarkerText}
            theScore={this.props.score}
            theTime={this.props.timeRemaining}
            phase={gamePhase} />
        <BuildingRows
          exampleRow={this.props.exampleRow}
          userRow={this.props.userRow} />
        <Vehicles />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  level: state.level,
  exampleRow: state.exampleRow,
  userRow: state.userRow,
  levelMarkerText: state.levelMarkerText,
  levelComplete: state.levelComplete,
  score: state.score,
  timeRemaining: state.timeRemaining
});

export default connect(mapStateToProps)(WorldContainer);
