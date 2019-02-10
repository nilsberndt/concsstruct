import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInitials, toggleHighScoreWindow } from '../actions/actions';

class HighScore extends Component {

  constructor(props) {
    super(props);

    this.state = {value: ""};

    this.onToggleHighScoreWindow = this.onToggleHighScoreWindow.bind(this);
    this.onSetInitials = this.onSetInitials.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onToggleHighScoreWindow(currentState){
    this.props.onToggleHighScoreWindow(currentState);
  }

  onSetInitials(initials){
    this.props.onSetInitials(initials);
  }

  handleSubmit(event){
    if (this.state.value.length === 0){
      this.props.onSetInitials("XYZ");
    }else{
      this.props.onSetInitials(this.state.value.toUpperCase());
    }
    this.props.onToggleHighScoreWindow(true);
    event.preventDefault();
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render() {
    if (this.props.highScoreWindow && this.props.levelComplete){
    return (
      
      <div className="menu--high-score-container">
        <h2>CONGRATULATIONS!</h2>
        <h2>You achieved the new high score:</h2>
        <h1>{this.props.score}</h1>
        <h2>Please leave your initials:</h2>
        <form onSubmit={this.handleSubmit}>
          <input ref="userInitials" 
              onChange={this.handleChange} 
              type="text" 
              pattern="[A-Za-z]{3}" 
              placeholder="XYZ" 
              maxLength="3"/><br/><br/>
          <button type="submit" className="menu--high-score-button">OK</button>
        </form>
      </div>
    );
    }
    else{
      return null;
    }
  }

}

const mapStateToProps = state => ({
  score: state.score,
  highScoreWindow: state.highScoreWindow,
  levelComplete: state.levelComplete
});

const mapActionsToProps = {
  onToggleHighScoreWindow: toggleHighScoreWindow,
  onSetInitials: setInitials
};


export default connect(mapStateToProps, mapActionsToProps)(HighScore)