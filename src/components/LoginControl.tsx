import React, { useState } from "react";

const LoginControl: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={toggleLogin}>Logout</button>
      ) : (
        <button onClick={toggleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginControl;
