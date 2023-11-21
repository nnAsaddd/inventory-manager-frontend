import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ cookies ] = useCookies([]);
  const navigate = useNavigate();
  const {data, isLoading, error, isError, isSuccess, mutate} = useMutation({
    mutationFn: async (user) => {
      return await axios.post(
        "https://inventory-manager-fglv.onrender.com/api/v1/auth/login",
        user,
        {
          withCredentials: true,
        }
      )
    }
  });

  const handleLoginUser = () => {
    mutate({ email, password });
    setEmail("");
    setPassword("");
  };

  if (isLoading) return <h1>Loading...</h1>;
  useEffect(() => {
    if (isSuccess) {
      console.log("success boiiiiiii");
      console.log("Cookies:", JSON.stringify(cookies));
      if (cookies.token) {
        navigate("/"); // Change this to the correct route for the products page
      } else {
        console.log("Token cookie is not set");
      }
    }
  }, [isSuccess, cookies, navigate]);
  if(isError)
  {
    console.log("error : " + error);
  }
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
