import React, { Component } from "react";
import ReactDOM from "react-dom";
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
      </form>
    );
  }
}
const wrapper = document.getElementById("create-article-form");
console.log('wrapper',wrapper)
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;