import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { database, db } from "../services/firebase";

const ref = database.ref("users/");
const userRef = db.collection("users");
export const getAllUserFromDatabase = createAsyncThunk("users/", async () => {
  try {
    const userArr = [];
    await ref.once("value").then((snap) => {
      snap.forEach((data) => {
        let user = data.val();
        userArr.push(user);
      });
    });
    console.log("userArr", userArr);
    return userArr;
  } catch (ex) {
    console.log(ex);
  }
});

export const getAllUserFromFirestore = createAsyncThunk("users", async () => {
  try {
    const users = [];
    const snapshot = await userRef.get();
    snapshot.forEach((doc) => {
      const temp = doc.data();
      users.push(temp);
    });
    return users;
  } catch (ex) {
    console.log(ex);
  }
});

export const loadData = () => {
  return (dispatch, getState) => {
    ref.on("child_added", (snapshot) => {
      dispatch(actions.addUser(snapshot.val()));
    });
    ref.on("child_removed", (snapshot) => {
      dispatch(actions.removeUser(snapshot.val().id))
    });
    ref.on("child_changed", (snapshot) => {
      let users = getState().user.userRealtime;
      const arrAfterUpdate = users.map((item) => {
        if (item.id === snapshot.val().id) {
          return { ...item, ...snapshot.val() };
        }
        return item;
      });
      console.log("arrAfterUpdate", arrAfterUpdate);
      dispatch(actions.storeUser(arrAfterUpdate));
    });
  };
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    error: null,
    userLogin: {
      name: "",
      email: "",
      img: "",
    },
    userRealtime: [],
    userFirestore: [],
  },
  reducers: {
    storeUser: (state, action) => {
      state.userRealtime = action.payload;
    },
    addUser: (state, action) =>{
      state.userRealtime = [...state.userRealtime, action.payload]
    },
    removeUser: (state, action) => {
      let arrAfterRemove = state.userRealtime.filter(
        (item) => item.id !== action.payload
      );
      state.userRealtime = arrAfterRemove
    
    }
    ,
    loginFacebook: (state, action) => {
      state.userLogin = action.payload;
    },
    logoutFacebook: (state, action) => {
      state.userLogin = action.payload;
    },
  },

  extraReducers: {
    //get all user
    [getAllUserFromDatabase.pending]: (state, action) => {
      if (state.isLoading === false) {
        state.isLoading = true;
      }
    },
    [getAllUserFromDatabase.fulfilled]: (state, action) => {
      if (state.isLoading === true) {
        state.userRealtime = action.payload;
      }
    },
    [getAllUserFromDatabase.rejected]: (state, action) => {
      if (state.isLoading === true) {
        state.isLoading = false;
        state.error = action.payload;
      }
    },
    [getAllUserFromFirestore.pending]: (state, action) => {
      if (state.isLoading === false) {
        state.isLoading = true;
      }
    },
    [getAllUserFromFirestore.fulfilled]: (state, action) => {
      state.userFirestore = action.payload;
    },
  },
});

export const { actions, reducer } = userSlice;
export default reducer;
