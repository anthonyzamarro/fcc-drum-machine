import React, { Component } from "react";
import { connect } from "react-redux";
import { drumClicked } from "../actions/drumsAction";

class Drums extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleClick(d) {
    let audio = new Audio(d.audio);
    audio.play();
    this.props.itemClicked(d);
  }
  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress.bind(this));
  }
  handleKeyPress(event) {
    if (event.key === 'q') {
      console.log(event);
    }
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
      <div onKeyDown={(e) => this.handleKeyPress(e)}>
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
