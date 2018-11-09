import React, { Component } from "react";
import { connect } from "react-redux";
import { drumClicked } from "../actions/drumsAction";
import { drumPressed } from "../actions/drumsAction";

class Drums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drum: this.props.drumData.drumData
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentWillMount() {
    document.addEventListener("keyup", e => this.handleKeyPress(e));
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", e => this.handleKeyPress(e));
  }
  handleClick(d) {
    let audio = new Audio(d.audio);
    audio.play();
    this.props.itemClicked(d);
  }
  handleKeyPress(e) {
    this.state.drum.forEach(d => {
      if (e.key === d.keyCode) {
        let audio = new Audio(d.audio);
        audio.play();
        this.props.itemPressed(d);
      }
    });
  }
  render() {
    let displayDrums = this.props.drumData.drumData.map(drum => {
      return (
        <li
          key={drum.id}
          onClick={() => this.handleClick(drum)}
          id={`key-${drum.key}`}
          className="drum-pad"
        >
          {drum.key}
          <audio src={drum.audio} className="clip" id={drum.key} />
        </li>
      );
    });
    return (
      <div>
        <ul>{displayDrums}</ul>
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
    },
    itemPressed: data => {
      dispatch(drumPressed(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drums);
