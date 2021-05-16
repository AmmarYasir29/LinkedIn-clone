import React from "react";
import "../styles/login.css";
import firebase from "firebase";

const Login = () => {
  const provider = new firebase.auth.FacebookAuthProvider();

  const handleLogIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        //var accessToken: string = result.credential;

        // The signed-in user info.
        var user = result.user;
        console.log(user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var accessToken = credential.accessToken;
      })
      .catch((error) => {
        // Handle Errors here.
        //var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        //var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        //var credential = error.credential;
        console.log(errorMessage);
      });
  };
  return (
    <div className="login">
      <img
        src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png"
        alt="linkedin"
      />
      <button type="submit" onClick={handleLogIn}>
        login with facebook
      </button>
      <button type="submit" onClick={handleLogIn}>
        login with google
      </button>
    </div>
  );
};

export default Login;
