import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Login() {
  const [{}, dispatch] = useStateValue();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const addUser = () => {
    dispatch({
      type: "ADD_USER",
      user: userData,
    });
  };

  const handleUser = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const register = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="login__logo"
          alt="Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            name="username"
            value={userData.username}
            onChange={handleUser}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleUser}
          />
          <Link to="/">
            <button
              className="login__signInButton"
              type="submit"
              onClick={addUser}
            >
              Sign in
            </button>
          </Link>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
