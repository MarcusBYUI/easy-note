import React, { useState } from "react";

import styles from "./authCard.module.css";
import { login, signup } from "../authhelper";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const AuthCard = () => {
  const [screen, setScreen] = useState("signin");
  const [auth, setAuth] = useState(true);
  const handleChangeForm = () => {
    setAuth(true);
    screen === "signin" ? setScreen("signup") : setScreen("signin");
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    if (auth && screen === "signup") {
      signup(dispatch, form, setScreen);
    } else if (auth && screen === "signin") {
      login(dispatch, form, navigate);
    }
  };

  const authScreen = (
    <form onSubmit={submitForm}>
      {screen === "signup" ? (
        <>
          <label>
            First Name
            <input type="text" name="first_name" required />
          </label>
          <label>
            Last Name
            <input type="text" name="last_name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
        </>
      ) : undefined}
      <label>
        Username
        <input type="text" name="username" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <p
        onClick={() => {
          setAuth(false);
          setScreen("reset");
        }}
      >
        Forgot password
      </p>
      <input
        type="submit"
        value={screen === "signup" ? "Create Account" : "Sign in"}
      />
    </form>
  );

  const passwordReset = (
    <form onSubmit="">
      {screen === "token" ? (
        <label>
          Token
          <input type="text" name="token" required />
        </label>
      ) : undefined}
      {screen === "token" ? (
        <label>
          New Password
          <input type="password" name="password" required />
        </label>
      ) : (
        <label>
          Email
          <input type="email" name="email" required />
        </label>
      )}

      <input
        type="submit"
        value={screen === "reset" ? "Request Reset Token" : "Change Password"}
      />
    </form>
  );
  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        {auth ? authScreen : passwordReset}
        <p>
          {screen === "signin"
            ? "Don't have an account?"
            : "Already Have An Account?"}{" "}
          <span onClick={handleChangeForm}>
            {screen === "signin" ? "Sign up" : "Sign in"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthCard;
