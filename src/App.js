import React, { Component } from "react";
import Drums from "./components/drums";
import DrumsInfo from "./components/drumsInfo";

class App extends Component {
  render() {
    return (
      <div className="App drum-machine-container" id="drum-machine">
        <div className="display-container" id="display">
          <DrumsInfo />
          <Drums />
        </div>
      </div>
    );
  }
}

export default App;
