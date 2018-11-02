import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import axios from "axios";
import Register from "./register";
import EmpolyeeDetail from "./EmployeeDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      EmployeesData: []
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
        <button onClick={this.getEmployeesData}>Get Employees Data</button>
        {this.state.EmployeesData.length > 0 &&
          this.state.EmployeesData.map((data, index) => (
            <EmpolyeeDetail
              key={index}
              emp_no={data.emp_no}
              first_name={data.first_name}
              last_name={data.last_name}
              birt_date={data.birth_date}
              gender={data.gender}
            />
          ))}
      </div>
    );
  }
}

export default App;
