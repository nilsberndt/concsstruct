import React, { Component } from 'react';

class BuildingRows extends Component {


  render() {

    return (
    <div className="building--row-container">
      <div 
          id="sourceRow" 
          className="building--row building--row__source effect--glow"
          dangerouslySetInnerHTML={{ __html: this.props.exampleRow}} />
      <div className="building--row building--row__user"
          dangerouslySetInnerHTML={{ __html: this.props.userRow}} />
    </div>
    );
  }
}

export default BuildingRows;