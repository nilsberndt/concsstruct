import React, { Component } from 'react';
import LevelMarker from '../components/LevelMarker';
import BuildingRows from '../components/BuildingRows';
import Vehicles from '../components/Vehicles';
import '../styles/building.scss';
import { connect } from 'react-redux';

class WorldContainer extends Component {

  render() {
    let completeStyle = "";
    if (this.props.levelComplete){
      completeStyle = (<div className='world--container-dark'></div>);
    }else{
      completeStyle = "";
    }

    return (
      <div className="world--container">
      {completeStyle}
      <LevelMarker text={this.props.levelMarkerText}/>
      <BuildingRows 
          exampleRow={this.props.exampleRow} 
          userRow={this.props.userRow}/>
      <Vehicles />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exampleRow: state.exampleRow,
  userRow: state.userRow,
  levelMarkerText: state.levelMarkerText,
  levelComplete: state.levelComplete
});

export default connect(mapStateToProps) (WorldContainer);
