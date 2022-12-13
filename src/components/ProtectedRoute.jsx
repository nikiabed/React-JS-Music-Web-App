import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const {
    user: { loggedIn },
  } = false;

  console.log(loggedIn);
  return loggedIn ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/",
      }}
    />
  );
};

export default ProtectedRoute;
