import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'
import './scss/index.scss'

ReactDOM.render(
  <BrowserRouter>
    {/* <Provider {...store}> */}
    <App/>
    {/* </Provider> */}
  </BrowserRouter>,
  document.getElementById('app'))
