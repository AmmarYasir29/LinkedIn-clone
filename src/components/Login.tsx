import React, { useState } from "react";
import "../styles/login.css";
import firebase from "firebase";
import { auth } from "../firebase";
import { login } from "../store/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const handleLogIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        /** @type {firebase.auth.OAuthCredential} */
        //var accessToken: string = result.credential;

        // The signed-in user info.
        var user = result.user;
        console.log(user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var accessToken = credential.accessToken;
      })
      .catch(error => {
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
  const Login = (e: any) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth: any) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayname: userAuth.user.displayName,
            profileUrl: userAuth.user?.photoURL,
          })
        );
      })
      .catch(error => alert(error));
  };

  const habdleRegister = () => {
    if (!name) alert("please full the full name");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth: any) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch(error => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png"
        alt="linkedin"
      />
      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL img"
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" onClick={Login}>
          Login
        </button>
        <p>
          new member? <span onClick={habdleRegister}>Register</span>
        </p>
      </form>
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
