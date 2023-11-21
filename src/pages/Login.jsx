import React, { useState } from "react";
import useLoginUser from "../customHooks/useLoginUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, isError, error, mutate } = useLoginUser();

  const handleLoginUser = () => {
    mutate({ email, password });
    setEmail("");
    setPassword("");
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="login">
      <div className="wrapper login-wrapper">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Login</h3>
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLoginUser} className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
