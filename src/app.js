import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <img src="/assets/index.png"/>
      </div>
    );
  }
}


export default App;