import React, { useState } from "react";

import styles from "./authCard.module.css";
const AuthCard = () => {
  const [screen, setScreen] = useState("signin");
  const [auth, setAuth] = useState(true);
  const handleChangeForm = () => {
    setAuth(true);
    screen === "signin" ? setScreen("signup") : setScreen("signin");
  };

  const authScreen = (
    <form onSubmit="">
      {screen === "signup" ? (
        <label>
          Name
          <input type="text" name="name" required />
        </label>
      ) : undefined}
      <label>
        Email
        <input type="email" name="email" required />
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
