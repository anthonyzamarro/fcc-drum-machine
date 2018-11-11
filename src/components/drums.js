import React, { Component } from "react";
import { connect } from "react-redux";
import { drumClicked } from "../actions/drumsAction";
import { drumPressed } from "../actions/drumsAction";

class Drums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drum: this.props.drumData.drumData,
      current: 'active'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    // document.addEventListener("keydown", e => this.handleKeyPress(e));
  }
  handleClick(e, d) {
    e.target.children[0].play();
    e.persist()
    e.target.classList.add(this.state.current);
    setTimeout(() => {
      e.target.classList.remove(this.state.current);
    }, 100);
    this.props.itemClicked(d);
  }
  handleKeyPress(e) {
    this.state.drum.forEach(d => {
      if (e.key === d.keyCode) {
        let currentDrum = document.querySelector(`#key-${d.key}`);
        // console.log(currentDrum.children[0]);
        currentDrum.children[0].play();
        currentDrum.classList.add(this.state.current);
        setTimeout(() => {
          currentDrum.classList.remove(this.state.current);
        }, 100);
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
          onKeyPress={e => this.handleKeyPress(e)}
          id={`key-${drum.key}`}
          className={`drum-pad`}
          tabIndex="0"
          ref={li => li && li.focus()}
        >
          {drum.key}
          <audio src={drum.audio} className="clip" id={drum.key} />
        </li>
      );
    });
    return (
      <div className="display-drums-container">
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
