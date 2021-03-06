import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Login() {
  const [password, setpassword] = useState([]);
  const [gmail, setgmail] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      let post = await axios.post("https://yadharthauth.herokuapp.com/login", {
        gmail,
        password,
      });
      window.alert(post.data.message);
      if (post.data.status === true) {
        window.localStorage.setItem("app_token", post.data.token);
        navigate("/urls", { replace: true });
      } else if (post.data.status === false) {
        navigate("/register", { replace: true });
      }
    } catch (error) {}
  };

  return (
    <div className="Register">
      <div className="register">
        <div className="box">
          <div className="heading">Login</div>
          <form
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            <div className="gmail">
              <input
                type="text"
                id="gmail"
                placeholder="Gmail"
                value={gmail}
                onChange={(e) => {
                  setgmail(e.target.value);
                }}
              />
            </div>
            <div className="password">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <div className="registersubmit">
              <input value="Login" type="submit" id="registersubmit" />
            </div>
            <div className="group">
              <div className="groupkey">
                <Link to="/register">New user?</Link>
              </div>
              <div className="groupkey">
                <Link to="fgmail">Forgot password?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
