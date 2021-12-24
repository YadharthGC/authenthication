import "./App.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function Verify() {
  const [code, setcode] = useState([]);
  const params = useParams();
  const did = params.id;
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      let post = await axios.post("https://yadharthauth.herokuapp.com/code", {
        code,
        did,
      });
      window.alert(post.data.message);
      if (post.data.message === "Account verified") {
        navigate("/", { replace: true });
      }
    } catch (error) {}
  };

  return (
    <div className="Login">
      <div className="loginbox">
        <div className="key">Verify</div>
        <div className="keysub">Verification code</div>
        <form
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <div className="keysub">
            <input
              type="text"
              id="logintext"
              value={code}
              onChange={(e) => {
                setcode(e.target.value);
              }}
            />
          </div>
          <div className="keysubmit">
            <input type="submit" value="Login" id="loginsubmit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Verify;
