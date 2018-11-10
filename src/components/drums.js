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
  componentDidMount() {
    document.addEventListener("keyup", e => this.handleKeyPress(e));
  }
  handleClick(e, d) {
    e.target.children[0].play();
    this.props.itemClicked(d);
  }
  handleKeyPress(e) {
    this.state.drum.forEach(d => {
      if (e.key === d.keyCode) {
        let currentDrum = document.querySelector(`#key-${d.key}`);
        currentDrum.children[0].play()
        this.props.itemPressed(d);
      }
    });
  }
  render() {
    let displayDrums = this.props.drumData.drumData.map(drum => {
      return (
        <li
          key={drum.id}
          onClick={e => this.handleClick(e, drum)}
          id={`key-${drum.key}`}
          className="drum-pad"
          tabIndex="0"
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
