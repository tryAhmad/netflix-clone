import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";

const Login = () => {
  const [signIn, setSignIn] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if (signIn === "Sign In") {
      await login(email, password);
    }
    else {
      await signup(name, email, password);
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="Netflix" className="login-logo" />
      <div className="login-form">
        <h1>{signIn}</h1>
        <form>
          {signIn === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              type="text"
              placeholder="Your name"
            />
          ) : (
            <> </>
          )}

          <input
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            type="password"
            placeholder="Password"
          />

          <button onClick={user_auth} type="submit" >{signIn}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signIn === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignIn("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setSignIn("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
