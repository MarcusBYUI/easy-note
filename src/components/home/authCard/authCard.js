import React, { useState } from "react";

const AuthCard = () => {
  const [screen, setScreen] = useState("login");
  return (
    <div>
      <form onSubmit="">
        {screen === "signup" ? (
          <label>
            name
            <input type="text" required />
          </label>
        ) : undefined}
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <p>Forgot password</p>
        <input type="button" value="Create Account" />
      </form>
      <p>
        Don't have an account? <span>Sign up</span>
      </p>
    </div>
  );
};

export default AuthCard;
