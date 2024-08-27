import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {

  const[signIn, setSignIn] = useState("Sign In")

  return (
    <div className="login">
      <img src={logo} alt="Netflix" className="login-logo" />
      <div className="login-form">
        <h1>{signIn}</h1>
        <form>
          {signIn === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <> </>
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signIn}</button>
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
              New to Netflix? <span onClick={() => {setSignIn("Sign Up")}} >Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account? <span onClick={() => {setSignIn("Sign In")}} >Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
