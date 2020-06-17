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

function UserInfor() {
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
    <div className="container">
      {userLogin.name ? (
        <div>
          <div className="menu-bar">
            <div className="user-name">
              <img alt="NotFound" src={userLogin.img} className="avatar" />
              <h3 className="displayName">{userLogin.name}</h3>
            </div>
            <div className="logout">
              <button onClick={logout} className="logout-btn button-logout">
                Log Out
              </button>
            </div>
          </div>
          <div className="content">{userLogin.email}</div>
          <div>
            <h3>All users from Cloud Store</h3>
            {userFirestore.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  All users from realtime database
                </h3>
              </div>
              <div>
                <table style={{ width: "50%" }}>
                  <tbody>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                    {user.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login authenticate={authenticate} />
      )}
    </div>
  );
}

export default UserInfor;
