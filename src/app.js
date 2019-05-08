import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const  App = () => (
       <div>
        <h1>App</h1>
        <Router>
            
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
        </Router>
       </div>
    );
  



export default App;