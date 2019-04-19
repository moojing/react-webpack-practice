import FormContainer from "./js/components/container/FormContainer.js";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import './scss/index.scss';



const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
