import "./App.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function Fmail() {
  const [gmail, setgmail] = useState([]);
  const params = useParams();
  const did = params.id;
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      let post = await axios.post("http://localhost:3003/fmail", { gmail });
      window.alert(post.data.message);
      if (post.data.status) {
        navigate("/", { replace: true });
      }
    } catch (error) {}
  };

  return (
    <div className="Login">
      <div className="loginbox">
        <div className="key">Forgot Password</div>
        <div className="keysub" style={{ textAlign: "center" }}>
          Enter your gmail
        </div>
        <form
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <div className="keysub" style={{ textAlign: "center" }}>
            <input
              style={{ width: "200px" }}
              type="text"
              id="logintext"
              value={gmail}
              onChange={(e) => {
                setgmail(e.target.value);
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

export default Fmail;
