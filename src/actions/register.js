import firebase from "firebase/app";
import { myFirebase } from "../Firebase/firebase";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

const requestRegister = () => {
  return {
    type: REGISTER_REQUEST
  };
};

const successRegister = user => {
  return {
    type: REGISTER_SUCCESS,
    user
  };
};

const registerError = () => {
  return {
    type: REGISTER_FAILURE
  };
};

export const registerUser = (email, password) => dispatch => {
  dispatch(requestRegister());
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(successRegister(user));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(registerError());
    });
};

export const registerWithProvider = (method) => dispatch => {
  
  if (method === 'github') {
    var provider = new firebase.auth.GithubAuthProvider();
  }

  dispatch(requestRegister());
  myFirebase
    .auth()
    .signInWithPopup(provider)
    .then(user => {
      dispatch(successRegister(user));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(registerError());
    });
};