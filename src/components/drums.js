import React, { Component } from "react";
import { connect } from "react-redux";
import { drumClicked } from "../actions/drumsAction";

class Drums extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log("this is:", this);
    this.props.itemClicked(true);
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={() => this.handleClick()}>Q</li>
          <li>W</li>
          <li>E</li>
          <li>A</li>
          <li>S</li>
          <li>D</li>
          <li>Z</li>
          <li>X</li>
          <li>C</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(drum_data) {
  console.log(drum_data);
  return {
    drum_data
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
