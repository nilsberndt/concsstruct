import React, { Component } from 'react';
import '../styles/app.scss';
import { updateBlueprint, completeLevel } from '../actions/actions';
import { connect } from 'react-redux';

class Blueprint extends Component {

  constructor(props) {
    super(props);

    this.onCompleteLevel = this.onCompleteLevel.bind(this);
    this.onUpdateBlueprint = this.onUpdateBlueprint.bind(this);
  }


  onUpdateBlueprint(event) {
    this.props.onUpdateBlueprint(event.target.value.toString());
    console.log(this.props.levelComplete);
    if (event.target.value.trim().replace(/[\n\f\r\t]/g, "") === this.props.exampleRow.trim().replace(/[\n\f\r\t]/g, "")
      && !this.props.levelComplete) {
      setTimeout(() => this.onCompleteLevel(this.props.level), 200);
    }
  }

  onCompleteLevel(level) {
    this.props.onCompleteLevel(level);
  }




  render() {
    return (
      <div className="menu--blueprint-container">
        <textarea
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
  levelComplete: state.levelComplete
});

const mapActionsToProps = {
  onUpdateBlueprint: updateBlueprint,
  onCompleteLevel: completeLevel
};

export default connect(mapStateToProps, mapActionsToProps)(Blueprint);

