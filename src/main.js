import App from './App.js';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import './scss/index.scss';



const wrapper = document.getElementById("app");
console.log('wrapper',wrapper)
wrapper ? ReactDOM.render(<App />, wrapper) : false;
