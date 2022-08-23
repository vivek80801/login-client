import React from "react";
import { Navigate } from "react-router-dom";
import protectedRoutes from "./protectedRoutes.module.css";
import { IUserContext, UserContext } from "../../context";

/* @ts-ignore */
const ProtectedRoutes: React.FC = ({ children }): JSX.Element => {
  const { user, setUser } = React.useContext<IUserContext>(UserContext);
  if (!user) {
    return (
      <>
        <Navigate to="/" replace />
      </>
    );
  } else if (user.name === "") {
    return (
      <>
        <Navigate to="/" replace />
      </>
    );
  } else {
    return children;
  }
};

export default ProtectedRoutes;
