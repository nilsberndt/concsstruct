import React, { Component } from 'react';
import { countdown, completeLevel } from '../actions/actions';
import { connect } from 'react-redux';

export var globalTimeout;

class CountdownTimer extends Component {

  constructor(props) {
    super(props);
    this.onCountdown = this.onCountdown.bind(this);
    this.onCompleteLevel = this.onCompleteLevel.bind(this);
  }

  render() {

    if (this.props.level > 5){
      return (
        <div className="world--time-text">
          <h4>TIME</h4>
          <h2>{this.props.timeRemaining}</h2>
        </div>
      );
    } else{
      return null;
    }
  }

  componentDidUpdate() {
    if(this.props.timeRemaining <= 1){
      setTimeout(() => this.onCompleteLevel(999), 1000);
    };

    if(this.props.running && !this.props.levelComplete){
      globalTimeout = setTimeout(() => this.onCountdown(
          this.props.timeRemaining), 
          (15000 / (10+(this.props.level-5)*2)));
    };
  }

  onCompleteLevel(level){
    this.props.onCompleteLevel(level);
  }

  onCountdown(theTime){
    this.props.onCountdown(theTime);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

}

const mapActionsToProps = {
  onCompleteLevel: completeLevel,
  onCountdown: countdown
};

const mapStateToProps = state => ({
  timeRemaining: state.timeRemaining,
  running: state.running,
  level: state.level,
  levelComplete: state.levelComplete
});

export default connect(mapStateToProps, mapActionsToProps)(CountdownTimer);