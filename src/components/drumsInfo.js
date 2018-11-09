import React, { Component } from "react";
import { connect } from "react-redux";

class DrumsInfo extends Component {
  render() {
    console.log("drums info props", this.props.data.drumz);
    let display =
      this.props.data.drumz === null
        ? "Start Playing!"
        : this.props.data.drumz.type;
    console.log(display);
    return (
      <div>
        <h1>Drums Information, BABY! </h1>
        <div>{display}</div>
      </div>
    );
  }
}

function mapStateToProps(data) {
  return {
    data
  };
}
export default connect(
  mapStateToProps,
  null
)(DrumsInfo);
