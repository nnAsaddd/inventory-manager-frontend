import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// import jwtDecode from "jwt-decode";

const ProtectedRoutes = () => {
  const [cookies] = useCookies([]);
  const isValid = cookies.token;
  console.log(isValid);
  // let user = null;
  // if (isValid) {
  //   try {
  //     const decodedToken = jwtDecode(token);
  //     user = decodedToken.user;
  //     console.log(decodedToken);
  //   } catch (error) {
  //     console.error("Error decoding token:", error);
  //   }
  // }
  console.log("done");
  return isValid ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
