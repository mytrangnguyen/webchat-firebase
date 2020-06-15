import React, { useState, useEffect } from "react";
import Login from "./Login";
import { firebase, db, database } from "../services/firebase";
import {
  addNewUserToCloud,
  addNewUserToRealTimeDatabase,
} from "../services/firebase";

function UserInfor() {
  const [newUser, setNewUser] = useState({ email: "", name: "", role: "user" });
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [displayName, setName] = useState("");
  const [img, setImg] = useState("");
  const [isLoading, setIsLoading] = useState("false");
  const [updating, setUpdating] = useState(false);
  const [userRealtime, setUserRealTime] = useState([]);
  const [updateUser, setUpdateUser] = useState({ name: "", email: "" });
  const [userUpdate, setUserUpdate] = useState("");
  const [emailUpdate, setEmailUpdate] = useState("");

  const getAllUserFromCloud = async () => {
    try {
      var userRef = db.collection("users");
      const users = [];
      const snapshot = await userRef.get();
      snapshot.forEach((doc) => {
        // console.log(doc.data());
        const temp = doc.data();
        users.push(temp);
      });
      setUsers(users);
    } catch (ex) {
      console.error(ex);
    }
  };

  const getAllUserFromRealTimeDatabase = async () => {
    try {
      const userArr = [];
      var ref = database.ref("users/");
      await ref.once("value").then((snap) => {
        snap.forEach((data) => {
          let user = data.val();
          userArr.push(user);
        });
      });
      console.log("userArr", userArr);
      setUserRealTime(userArr);
      setIsLoading(true);
    } catch (ex) {
      console.log(ex);
    }
  };

  
  const handleChildRemoved = (data) => {
    userRealtime.filter((e)=> e.key !== data.val().id);
    console.log("child_remove", userRealtime);
    
   
  };

  const handleChildChanged = async (snapshot) => {
    console.log("snapshot.val()", snapshot.val());
    console.log("aaaa", userRealtime);

    const result = userRealtime.map((item) => {
      if (item.id === snapshot.val().id) {
        console.log({ ...item, ...snapshot.val() });
      }
      console.log(item);
    });
    console.log("result", result);
  };

  


  const handleChildAdded = (snapshot) => {
    const user = snapshot.val();
    setUserRealTime((userRealtime) => {
      return [...userRealtime, user]
    }); 
    //log state: userRealtime: mảng trống
  };

  console.log("userRealtime", userRealtime); //log ở đây có

  const listenForUsers = () => {
    try {
      const ref = database.ref("users/");
      ref.on("child_added", handleChildAdded);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    listenForUsers();

    // ref.on("child_added", handleListen)
    // display data when add new user directly on firebase
    // ref.on("child_added", (dataSnapshot)=>{
    //   usersArr.push({
    //     key: dataSnapshot.key,
    //     id: dataSnapshot.val().id,
    //     name: dataSnapshot.val().name,
    //     email: dataSnapshot.val().email
    //   })
    //   console.log("fb user", usersArr);
    //   setUserRealTime(usersArr);
    // });

    //display data when change data directly on firebase
    // ref.on('child_changed', (data) =>{
    //   console.log("data.val()idddddddd", data.val().id);
    //   console.log("arrr = changed", usersArr);
    //   const result = usersArr.map((item)=>{
    //     if(item.id === data.val().id){
    //       return({...item, ...data.val()});
    //     }
    //     return item;
    //   })
    //   console.log("tan xuis", result);

    //   setUserRealTime(result);
    //   getAllUserFromRealTimeDatabase();
    //   console.log("mảng user", userRealtime);
    //   console.log("data.val()", data.val());
    //   // console.log("result", result);

    // });

    // ref.on('child_removed', (data)=> {
    //   getAllUserFromRealTimeDatabase();
    //   // console.log("fb user tryrffffffffffffffffffffd", userRealtime);
    //   console.log("user array added", usersArr);
    //   usersArr.filter((e)=>{
    //     console.log("e.key",e.key);
    //     console.log("data.val nef", data.val());

    //     console.log("data.val().key", data.val().id);
    //     usersArr.filter(e=>e.key !== data.val().id);
    //     console.log(" thwur nef", usersArr);
    //     setUserRealTime(usersArr);
    //   })
    //   // usersArr.filter(e=>e.key !== data.val().key);

    // });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        getAllUserFromCloud();
        // getAllUserFromRealTimeDatabase();
        authHandle({ user });
        //add User to Cloud Firestore
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
    setEmail(user.email);
    setName(user.displayName);
    setImg(user.photoURL);
  };

  const handleUpdate = () => {
    setUpdating("true");
    console.log("is updating", updating);
  };

  const handleChangeUpdate = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdateUser({ [name]: value });
  };

  const saveUpdateUser = (item) => {
    let ref = database.ref("users/");
    ref.child(item.id).update(updateUser);
    setUpdating(false);
  };

  const deleteUser = (item) => {
    let userRef = database.ref("users/" + item.id);
    userRef.remove();
  };

  const logout = async () => {
    console.log("logout");
    await firebase.auth().signOut();
    setName("");
    setEmail("");
    setImg("");
  };

  if (isLoading) {
    return (
      <div className="container">
        {displayName ? (
          <div>
            <div className="menu-bar">
              <div className="user-name">
                <img alt="NotFound" src={img} className="avatar" />
                <h3 className="displayName">{displayName}</h3>
              </div>
              <div className="logout">
                <button onClick={logout} className="logout-btn button-logout">
                  Log Out
                </button>
              </div>
            </div>
            <div className="content">{email}</div>
            <div>
              <h3>All users from Cloud Store</h3>
              {users.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    All users from realtime database
                  </h3>
                </div>
                <div>
                  {userRealtime.map((user) => (
                    <div>{user.email}</div>
                  ))}
                </div>
                <div>
                  <table style={{ width: "50%" }}>
                    <tbody>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <tr>Action</tr>
                      </tr>
                      {userRealtime.map((item, index) => {
                        // console.log('mapping', item)
                        return [
                          <tr key={index} className={updating ? "" : "disable"}>
                            <td>{index + 1}</td>
                            <td>
                              <input
                                type="text"
                                id={item.id}
                                defaultValue={item.name}
                                onChange={handleChangeUpdate}
                                name="name"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                id={item.id}
                                defaultValue={item.email}
                                onChange={handleChangeUpdate}
                                email="email"
                              />
                            </td>
                            <td>
                              {updating ? (
                                <span>
                                  <button
                                    className="btn btn-success btn-control"
                                    onClick={() => saveUpdateUser(item)}
                                  >
                                    <i className="fa fa-floppy-o" />
                                  </button>
                                </span>
                              ) : (
                                <button
                                  className="btn btn-secondary btn-control"
                                  onClick={handleUpdate}
                                >
                                  <i className="fa fa-pencil" />
                                </button>
                              )}
                              <button
                                className="btn btn-danger"
                                onClick={() =>
                                  window.confirm(
                                    "Do you want to delete this user?"
                                  )
                                    ? deleteUser(item)
                                    : ""
                                }
                              >
                                <i className="fa fa-trash-o" />
                              </button>
                            </td>
                          </tr>,
                        ];
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
  } else {
    return <div>Loading</div>;
  }
}

export default UserInfor;
