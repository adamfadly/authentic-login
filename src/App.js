import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }

  handleLogin = (email, password) => {
    // const data = {email, password};
    const data = { email: email, password: password };

    Axios.post("https://impact-byte-demo.herokuapp.com/accounts/login", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Login handleLogin={this.handleLogin} />
      </div>
    );
  }
}

export default App;
