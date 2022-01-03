import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Newpass() {
  const [password, setpassword] = useState([]);
  const [cpassword, setcpassword] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const did = params.id;
  const token = params.token;

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      if (password === cpassword) {
        console.log(token, did);
        let post = await axios.post(
          "https://yadharthauth.herokuapp.com/newpass",
          {
            password,
            token,
            did,
          }
        );
        window.alert(post.data.message);
        if (post.data.status === true) {
          navigate("/", { replace: true });
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
          <div className="heading">New Password</div>
          <form
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            <div className="password">
              <input
                type="password"
                id="password"
                placeholder="New Password"
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
                placeholder="Confirm new Password"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
            </div>
            <div className="registersubmit">
              <input value="submit" type="submit" id="registersubmit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newpass;
