import { Avatar } from "antd";
import { UserName } from "../styleComponent/styleComponent";
import logo from "../images/logo.jpg";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { firebase, db, database } from "../services/firebase";
import { addNewUserToCloud } from "../services/firebase";
import { actions } from "../features/userSlice";
import {
  getAllUserFromDatabase,
  loadData,
  getAllUserFromFirestore,
} from "../features/userSlice";

const HeaderPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userRealtime);
  const userLogin = useSelector((state) => state.user.userLogin);
  const userFirestore = useSelector((state) => state.user.userFirestore);

  useEffect(() => {
    dispatch(getAllUserFromDatabase());
    dispatch(loadData());
    dispatch(getAllUserFromFirestore());

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // getAllUserFromCloud();
        authHandle({ user });
        //add User to Cloud Firestoe
        var userRef = db.collection("users");
        userRef
          .where("id", "==", user.uid)
          .get()
          .then((snapshot) => {
            if (snapshot.empty) {
              addNewUserToCloud({
                id: user.uid,
                email: user.email,
                name: user.displayName,
                role: "user",
              });
            }
          });
      }
    });
  }, []);

  //xác thực bằng provider
  const authenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider();
    console.log("authProvider", authProvider);
    authProvider.addScope("email");
    firebase
      .auth()
      .signInWithPopup(authProvider)
      .then(authHandle)
      .catch(function (error) {
        console.log(error);
      });
  };

  //handle sau khi xác thực
  const authHandle = async (authData) => {
    const user = authData.user;
    const userLogin = {
      name: user.displayName,
      email: user.email,
      img: user.photoURL,
    };
    console.log("dispatch user login", userLogin);
    dispatch(actions.loginFacebook(userLogin));
  };

  const logout = async () => {
    console.log("logout");
    const userLogout = {
      name: "",
      email: "",
      img: "",
    };
    await firebase.auth().signOut();
    dispatch(actions.logoutFacebook(userLogout));
  };

  return (
    <div >
      {userLogin.name ? (
        <div className="header">
          <div className="header-logo">
            <img src={logo} className="logo" alt="not found" />
          </div>
          <div className="avt">
            <div className="user-avt">
              <a className="avt-hover" href="# ">
                <Avatar src="https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" />
              </a>
              &nbsp;&nbsp;
              <UserName>My Trang</UserName>
            </div>
            <button type="submit" onClick={logout}>Log out</button>
          </div>
        </div>
      ) : (
        <Login authenticate={authenticate} />
      )}
    </div>
  );
};

export default HeaderPage;
