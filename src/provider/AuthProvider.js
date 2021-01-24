import React, { useState } from "react";
import { authMethods } from "../firebase/authmethods";

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [email, setEmail] = useState(
    window.localStorage.getItem("emailForSignIn") || ""
  );

  const [errorResponse, setErrorResponse] = useState("");

  const initState = { email: "", password: "" };
  const [inputs, setInputs] = useState(initState);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);
  const handleSignup = () => {
    // middle man between firebase and signup
    console.log("handleSignup");
    // calling signup from firebase server
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };
  const handleSignin = () => {
    //changed to handleSingin
    console.log("handleSignin!!!!");
    // made signup signin
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
  };

  const handleSigninEmailLink = () => {
    alert(inputs.email);
    authMethods.sendEmailLink(inputs.email, setErrors, setToken);
  };
  return (
    <firebaseAuth.Provider
      value={{
        //replaced test with handleSignup
        handleSignup,
        handleSignin,
        token,
        inputs,
        setInputs,
        errors,
        handleSignout,
        handleSigninEmailLink
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
