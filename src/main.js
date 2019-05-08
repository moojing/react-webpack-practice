import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import './scss/index.scss'
import store from './store'
import App from './App.js'

ReactDOM.render(
    <BrowserRouter>
      <Provider {...store}>
        <App/>
      </Provider>
    </BrowserRouter>,  
    document.getElementById("app")) 

