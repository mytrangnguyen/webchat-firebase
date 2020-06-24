import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistory } from "../store";
import { auth, addNewUser } from "../services/firebase";

export const doSignin = createAsyncThunk(
  "users",
  async (userInfo, dispatch) => {
    try {
      console.log("vào login nè");

      await auth
        .signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((res) => {
          // console.log("ok");
          getHistory().push("/");
           
        })
        .catch((error) => {
          console.log("error", error);
        });
    } catch (error) {
      console.log("lỗi login nè", error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    initLoading: false,
    signinLoading: false,
    signupLoading: false,
    sendResetPasswordLoading: false,
    sendResetPasswordError: null,
    changePasswordLoading: false,
    changePasswordError: null,
    signinError: null,
    sigupError: null,
    userLogin: {
      email: "",
      password: "",
    },
  },
  reducers: {
    // setInitLoading: (state, action) => {
    //   state.init = action.payload;
    // },
  },
  extraReducers: {
    [doSignin.pending]: (state, action) => {
      if (state.initLoading === true) {
        state.initLoading = false;
      }
    },
    [doSignin.fulfilled]: (state, action) => {
      if (state.initLoading === false) {
        state.userLogin = action.payload;
      }
    },
    [doSignin.rejected]: (state, action) => {
      if (state.initLoading === false) {
        state.initLoading = true;
        state.error = action.payload;
      }
    },
  },
});

export const { actions, reducer } = authSlice;
export default reducer;
