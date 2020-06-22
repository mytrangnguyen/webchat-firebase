import React, { useState } from "react";
import { auth } from "../services/firebase";
import { message } from "antd";

const LoginWithEmailPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("ok");
      })
      .catch((error) => {
        console.log("error", error,message);
      });
  };
  return (
    <div className="register-form">
      <h2>Đăng nhập tài khoản</h2>
      <div className="imgcontainer">
        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
      </div>
      <div className="container">
        <label htmlFor="uname">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button
          type="submit"
          className="submit-register button"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginWithEmailPassword;
