import React from "react";
import { auth, provider } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import "./Login.css";
import { Button } from "@material-ui/core";
import { login } from "../../features/userSlice";

function Login() {
  const dispatch = useDispatch();

  // const signIn = () => {
  //   auth
  //     .signInWithPopup(provider)
  //     .then(({ user }) => {
  //       dispatch(
  //         login({
  //           displayName: user.displayName,
  //           email: user.email,
  //           photoUrl: user.photoURL,
  //         })
  //       );
  //     })
  //     .catch((error) => alert(error.message));
  // };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63"
          alt=""
        />
        <Button variant="contained" color="primary">
          {" "}
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
