import "./App.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [gmail, setgmail] = useState([]);
  const [password, setpassword] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let post = await axios.post("https://yadharthauth.herokuapp.com/login", {
        gmail,
        password,
      });
      window.alert(post.data.message);
      if (post.data.message === "gmail is not verified") {
        navigate(`/verify/${post.data.id}`);
      } else {
      }
    } catch (error) {}
  };

  return (
    <div className="Login">
      <div className="loginbox">
        <div className="key">Login</div>
        <div className="keysub">Gmail</div>
        <form
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <div className="keysub">
            <input
              type="text"
              id="logintext"
              value={gmail}
              onChange={(e) => {
                setgmail(e.target.value);
              }}
            />
          </div>
          <div className="keysub">Password</div>
          <div className="keysub">
            <input
              type="password"
              id="loginpassword"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div className="keysubmit">
            <input type="submit" value="Login" id="loginsubmit" />
          </div>
        </form>
        <div className="logintext">
          <Link to="/register">New user?</Link>
        </div>
        <div className="logintext">
          <Link to="/fmail">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
