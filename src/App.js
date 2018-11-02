import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import axios from "axios";
import Register from "./register";
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

    axios
      .post("https://impact-byte-demo.herokuapp.com/accounts/login", data)
      .then(res => {
        console.log(res.data);
        if (res.data.message === "You are logged in") {
          localStorage.setItem("token", res.data.token);
          this.setState({
            isAuthenticated: true
          });
        } else {
          alert("Wrong Password!");
        }
      })
      .catch(err => console.log(err));
  };

  handleRegister = (first_name, last_name, email, password) => {
    const body = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    };
    axios
      .post("https://impact-byte-demo.herokuapp.com/accounts/register", body)
      .then(res => {
        console.log(res);
        if (res.data.message === "insert account data success") {
          alert("sucssed");
        } else {
          alert("Failed");
        }
      })
      .catch(err => console.log(err));
  };

  getEmployeesData = () => {
    axios
      .get("https://impact-byte-demo.herokuapp.com/employees", {
        headers: {
          authorization: `bearer ${localStorage.token}`
        }
      })
      .then(res => {
        this.setState({
          EmployeesData: res.data.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Login handleLogin={this.handleLogin} />
        <Register handleRegister={this.handleRegister} />
        {this.state.isAuthenticated ? (
          <h1>you are authenticated</h1>
        ) : (
          <h1>you are not authenticated</h1>
        )}
        <button />
      </div>
    );
  }
}

export default App;
