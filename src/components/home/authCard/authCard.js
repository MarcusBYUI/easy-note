import React, { useState } from "react";

const AuthCard = () => {
  const [loginScreen, setLoginScreen] = useState(true);
  return (
    <div>
      <form onSubmit="">
        {loginScreen ? undefined : (
          <label>
            name
            <input type="text" required />
          </label>
        )}
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
      </form>
    </div>
  );
};

export default AuthCard;
