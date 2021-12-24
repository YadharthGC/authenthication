import "./App.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function Newpass() {
  const [password, setpassword] = useState([]);
  const params = useParams();
  const did = params.id;
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(e);
      console.log(did, params.token);
      let toke = params.token;
      let post = await axios.post("https://yadharthauth.herokuapp.com/fpass", {
        toke,
        did,
        password,
      });
      window.alert(post.data.message);
      if (true) {
        navigate("/", { replace: true });
      }
    } catch (error) {}
  };

  return (
    <div className="Login">
      <div className="loginbox">
        <div className="key">New Password</div>
        <div className="keysub" style={{ textAlign: "center" }}>
          Enter New Password
        </div>
        <form
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <div className="keysub" style={{ textAlign: "center" }}>
            <input
              style={{ width: "200px" }}
              type="password"
              id="logintext"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div className="keysubmit">
            <input type="submit" value="Submit" id="loginsubmit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newpass;
