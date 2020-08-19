import React, { Component } from "react";
import XMLUpload from "./containers/TokensList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tokens Documentation</h2>
        </div>
        <p className="App-intro">
          <XMLUpload />
        </p>
      </div>
    );
  }
}

export default App;
