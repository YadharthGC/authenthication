import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Register() {
  const [fname, setfname] = useState([]);
  const [lname, setlname] = useState([]);
  const [password, setpassword] = useState([]);
  const [cpassword, setcpassword] = useState([]);
  const [gmail, setgmail] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      if (password === cpassword) {
        let post = await axios.post(
          "https://yadharthauth.herokuapp.com/register",
          {
            fname,
            lname,
            gmail,
            password,
          }
        );
        window.alert(post.data.message);
        if (post.data.status === "al") {
          navigate("/", { replace: true });
        } else if (post.data.status === true) {
          navigate(`/verify/${post.data.id}`);
        }
      } else {
        window.alert("Check your password");
      }
    } catch (error) {}
  };

  return (
    <div className="Register">
      <div className="register">
        <div className="box">
          <div className="heading">Register</div>
          <form
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            <div className="name">
              <input
                type="text"
                id="fname"
                placeholder="fname"
                value={fname}
                onChange={(e) => {
                  setfname(e.target.value);
                }}
              />
              <input
                type="text"
                id="lname"
                placeholder="Last name"
                value={lname}
                onChange={(e) => {
                  setlname(e.target.value);
                }}
              />
            </div>
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
            <div className="cpassword">
              <input
                type="password"
                id="cpassword"
                placeholder="Confirm Password"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
            </div>
            <div className="registersubmit">
              <input value="Register" type="submit" id="registersubmit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
