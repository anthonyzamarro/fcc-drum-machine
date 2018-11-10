import React, { Component } from "react";
import { connect } from "react-redux";

class DrumsInfo extends Component {
  render() {
    // console.log("drums info props", this.props.data.drumz);
    let display =
      this.props.data.drumz === null
        ? "Start Playing!"
        : this.props.data.drumz.type;
    return (
      <div className="drums-info-container">
        <h1>{display}</h1>
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
