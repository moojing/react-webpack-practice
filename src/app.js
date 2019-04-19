import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

  


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
        <Router>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about/">About</Link>
                </li>
                <li>
                <Link to="/users/">Users</Link>
                </li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
        </Router>
       </div>
    );
  }
}


export default App;