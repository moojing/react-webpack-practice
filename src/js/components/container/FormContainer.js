import React, { Component } from "react";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <form id="article-form">
        <label>FormContainer</label>
      </form>
    );
  }
}


export default FormContainer;