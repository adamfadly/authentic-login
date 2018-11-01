import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleOnChange = e => {
    this.setstate({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="email"
          palceholder="Email"
          value={this.state.email}
          onChange={this.handleOnChange}
        />{" "}
        <br />
        <input
          type="text"
          name="password"
          palceholder="password"
          value={this.state.password}
          onChange={this.handleOnChange}
        />{" "}
        <br />
        <button
          onClick={() =>
            this.props.handleLogin(this.state.email, this.state.password)
          }
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
