import React, { Component } from "react";

class Login extends Component {
  
  render() {
    return (
      <div className="login">
        <h1>Welcome to my web chat</h1>
        <button
          type="button"
          className="login-button"
          onClick={() => this.props.authenticate()}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
