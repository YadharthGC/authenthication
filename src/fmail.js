import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Fmail() {
  const [gmail, setgmail] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      let post = await axios.post("https://yadharthauth.herokuapp.com/fmail", {
        gmail,
      });
      window.alert(post.data.message);
      if (post.data.status === true) {
        navigate("/", { replace: true });
      }
    } catch (error) {}
  };

  return (
    <div className="Register">
      <div className="register">
        <div className="box">
          <div className="heading">Forgot Password</div>
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
            <div className="registersubmit">
              <input value="Submit" type="submit" id="registersubmit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Fmail;
