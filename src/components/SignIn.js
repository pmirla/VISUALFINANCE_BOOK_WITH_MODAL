// add useContext
import React, { useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";
import { Signup } from "./SignUp";
import { Route, Switch } from "react-router-dom";
const Signin = () => {
  const {
    handleSignin,
    handleSigninEmailLink,
    inputs,
    setInputs,
    errors
  } = useContext(firebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    handleSignin();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitEmailLink = (e) => {
    e.preventDefault();
    console.log("handleSubmitEmailLink");
    handleSigninEmailLink();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* replace the div tags with a form tag */}
        <p>Signin</p>
        {/* make inputs  */}
        <input
          onChange={handleChange}
          name="email"
          placeholder="email"
          value={inputs.email}
        />
        <input
          onChange={handleChange}
          name="password"
          placeholder="password"
          value={inputs.password}
        />
        <button>signin</button>
        {errors.length > 0
          ? errors.map((error) => (
              <>
                <p style={{ color: "red" }}>{error}</p>
                {/* <Signup /> */}
              </>
            ))
          : null}
      </form>

      <form onSubmit={handleSubmitEmailLink}>
        {/* replace the div tags with a form tag */}
        <p>Signin</p>
        {/* make inputs  */}
        <input
          onChange={handleChange}
          name="email"
          placeholder="email"
          value={inputs.email}
        />

        <button>signin</button>
        {errors.length > 0
          ? errors.map((error) => (
              <>
                <p style={{ color: "red" }}>{error}</p>
                {/* <Signup /> */}
              </>
            ))
          : null}
      </form>
    </>
  );
};

export default Signin;
