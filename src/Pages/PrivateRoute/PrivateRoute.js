import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="container">
        <Spinner
          className="position-fixed d-block ms-5 top-50 left-50"
          animation="border"
        />
      </div>
    );
  }

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            ></Redirect>
          )
        }
      ></Route>
    </div>
  );
};

export default PrivateRoute;
