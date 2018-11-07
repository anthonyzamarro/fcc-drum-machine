import React, { Component } from "react";
import { connect } from "react-redux";
import { drumClicked } from "../actions/drumsAction";

class Drums extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(d) {
    let audio = new Audio(d.audio);
    audio.play();
    this.props.itemClicked(d);
  }
  render() {
    let displayDrums = this.props.drumData.drumData.map(drum => {
      return <li 
        key={drum.id}
        onClick={() => this.handleClick(drum)}
        id={`key-${drum.key}`}
        className="drum-pad">
        {drum.key}
        <audio src={drum.audio} className="clip" id={drum.key}></audio>
      </li>
    });
    return (
      <div>
        <ul>
        {displayDrums}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(drum_data) {
  return {
    drumData: drum_data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    itemClicked: data => {
      dispatch(drumClicked(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drums);
