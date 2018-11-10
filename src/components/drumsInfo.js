import React, { Component } from "react";
import { connect } from "react-redux";

class DrumsInfo extends Component {
  render() {
    let display =
      this.props.data.drumz === null
        ? "Start Playing!"
        : this.props.data.drumz.type;
    return (
      <div>
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
