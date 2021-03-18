import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./firebaseConfig";
export const initializeLoginFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
};

//* Google Sign In
export const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const { email, displayName, photoURL } = res.user;
      const setSignedUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success : true,
      };
      return setSignedUser;
    })
    .catch((err) => err.message);
};

//* Google Sign Out
export const handleGoogleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      const setSignOutUser = {
        isSignedIn: false,
        photo: "",
        email: "",
        photo: "",
      };
      return setSignOutUser;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

//* Update update UserName
const updateUserName = (name) => {
  var user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      console.log("SuccessFully update");
    })
    .catch(function (error) {
      console.log("Not update");
    });
};

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      updateUserName(name);
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.error = false;
      return newUserInfo;
    });
};

export const signInWithEmailAndPassword = (email, password) => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.error = false;
      return newUserInfo;
    });
};
