import React from "react";
import { useNavigate } from "react-router-dom";
import { IUserContext, UserContext } from "../../context";
import dashboard from "./dashboard.module.css";
import ProtectedRoutes from "../../components/protectedRoutes/protectedRoutes";

const Dashboard: React.FC = (): JSX.Element => {
  const { user, setUser } = React.useContext<IUserContext>(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setUser({ name: "", email: "", password: "" });
    navigate("/", { replace: true });
  };
  return (
    <>
      {/* @ts-ignore */}
      <ProtectedRoutes>
        <div className={dashboard.wrapper}>
          {user && user.name !== "" && (
            <div className={dashboard.container}>
              <h1>User Data</h1>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
              <div>Password: {user.password}</div>
              <button onClick={() => handleLogOut()}>log out</button>
            </div>
          )}
        </div>
      </ProtectedRoutes>
    </>
  );
};

export default Dashboard;
