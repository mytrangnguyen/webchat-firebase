import React, { useState } from "react";
import { auth } from "../services/firebase";
import { addNewUser } from "../services/firebase";

const Register = () => {
  const [userRegister, setUserRegister] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res.user.uid);
        addNewUser({
            id: res.user.uid,
            email: email,
            password: password,
        })
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="register-form">
      <h2>Đăng ký tài khoản</h2>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>

      <button
        type="submit"
        className="submit-register button"
        onClick={onRegister}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
