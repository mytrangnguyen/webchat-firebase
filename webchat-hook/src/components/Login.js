import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="login">
          <h1>Welcome to my web chat</h1>
          <button
            type="button"
            className="login-button"
            onClick={() => this.props.authenticate()}
          >
            Login with Facebook
          </button>
        </div>
        <div className="login">
          <button type="button" className="login-button">
            Sign Up With email password
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
