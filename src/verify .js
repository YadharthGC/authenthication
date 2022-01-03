import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Verify(props) {
  const [password, setpassword] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  let did = params.id;

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(params);
      let post = await axios.post("https://yadharthauth.herokuapp.com/verify", {
        password,
        did,
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
          <div className="heading">Verify</div>
          <form
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            <div className="password">
              <input
                type="password"
                id="password"
                placeholder="Verification-code"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <div className="registersubmit">
              <input value="Verify" type="submit" id="registersubmit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Verify;
