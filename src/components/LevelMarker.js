import React, { Component } from 'react';
import '../styles/app.scss';

class LevelMarker extends Component {
  render() {
    return (
      <div className="world--level-marker">
        <h2 id="levelMarkerText" className="effect--pump">{this.props.text}</h2>
      </div>
    );
  }
}



export default LevelMarker;