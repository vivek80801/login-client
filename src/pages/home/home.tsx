import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import home from "./home.module.css";
import { IUserContext, UserContext } from "../../context";

const Home: React.FC = (): JSX.Element => {
  const [name, setName] = React.useState("");
  const [errName, setErrName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errEmail, setErrEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errPassword, setErrPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errConfirmPassword, setErrConfirmPassword] = React.useState("");

  const { user, setUser } = React.useContext<IUserContext>(UserContext);
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let err = false;
    if (name === "") {
      setErrName("name can not be empty");
      err = true;
    } else if (name.length < 8) {
      setErrName("length of name can not be less then 8 characters");
      err = true;
    } else if (name.length > 20) {
      err = true;
      setErrName("length of name can not be more then 20 characters");
    }
    if (email === "") {
      err = true;
      setErrEmail("email can not be empty");
    }
    if (password === "") {
      err = true;
      setErrPassword("password can not be empty");
    } else if (password.length < 8) {
      err = true;
      setErrPassword("length of password can not be less then 8 characters");
    } else if (password.length > 20) {
      err = true;
      setErrPassword("length of password can not be more then 20 characters");
    }
    if (confirmPassword === "") {
      err = true;
      setErrConfirmPassword("confirm password can not be empty");
    } else if (password !== confirmPassword) {
      err = true;
      setErrConfirmPassword("confirm password did not matched");
    }

    setTimeout(() => {
      setErrName("");
      setErrEmail("");
      setErrPassword("");
      setErrConfirmPassword("");
    }, 5000);
    if (!err) {
      setUser({
        name,
        email,
        password,
      });
      navigate("/dashboard", {replace: true})
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} action="/">
        <h1>Log In Form</h1>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <div>
            <span className={home.err}>{errName}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <div>
            <span className={home.err}>{errEmail}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <div>
            <span className={home.err}>{errPassword}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <div>
            <span className={home.err}>{errConfirmPassword}</span>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Home;
