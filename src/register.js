import "./App.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [gmail, setgmail] = useState([]);
  const [password, setpassword] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      let post = await axios.post(
        "https://yadharthauth.herokuapp.com/register",
        {
          gmail,
          password,
        }
      );
      window.alert(post.data.message);
      if (post.data.status === "true") {
        navigate("/", { replace: true });
      } else {
      }
    } catch (error) {}
  };

  return (
    <div className="Login">
      <div className="loginbox">
        <div className="key">Register</div>
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
            <input type="submit" value="Register" id="loginsubmit" />
          </div>
        </form>
        <div className="logintext">
          <Link to="/">Already an user?</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
