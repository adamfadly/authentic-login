import React, { Component } from "react";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { first_name, last_name, email, password } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <hr />
        <input
          type="text"
          name="first_name"
          placeholder="First Name..."
          value={this.state.first_name}
          onChange={this.handleOnChange}
        />
        {""}
        <br />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name..."
          value={this.state.last_name}
          onChange={this.handleOnChange}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleOnChange}
        />
        <br />
        <input
          type="pasword"
          name="pasword"
          placeholder="pasword"
          value={this.state.pasword}
          onChange={this.handleOnChange}
        />
        <br />
        <button
          onClick={() =>
            this.props.handleRegister(first_name, last_name, email, password)
          }
        >
          Register
        </button>
      </div>
    );
  }
}

export default Register;
