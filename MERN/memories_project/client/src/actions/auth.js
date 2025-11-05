import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    // user log in...

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    // user sign in...

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
