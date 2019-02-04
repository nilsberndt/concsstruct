import React, { Component } from 'react';
import '../styles/app.scss';
import boss from '../images/boss.svg';
import { advanceLevel } from '../actions/actions';
import { connect } from 'react-redux';


class BossMessage extends Component {

  constructor(props) {
    super(props);

    this.onAdvanceLevel = this.onAdvanceLevel.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onAdvanceLevel(level) {
    this.props.onAdvanceLevel(level);
  }

  handleClick(e) {
    e.preventDefault();
    this.onAdvanceLevel(this.props.level);
  }


  render() {

    return (
      <div className="menu--boss-message-container">
        <div className="menu--boss-message__text-container">
          <div className="menu--boss-message__text">
            <div dangerouslySetInnerHTML={{ __html: this.props.message }} />
            <button
              style={this.props.proceedButton}
              onClick={this.handleClick}>CONTINUE</button>
          </div>
        </div>
        <img src={boss} className="menu--boss-message__boss" alt="The Boss" />
      </div>
    );
  }


}

const mapActionsToProps = {
  onAdvanceLevel: advanceLevel
};

const mapStateToProps = state => ({
  level: state.level,
  proceedButton: state.proceedButton
});

export default connect(mapStateToProps, mapActionsToProps)(BossMessage);