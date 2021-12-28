import "./App.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Verify from "./verify";
import Fmail from "./fmail";
import Newpass from "./newpass";
import Urls from "./url";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact={true} />
          <Route path="/register" element={<Register />} exact={true} />
          <Route path="/verify/:id" element={<Verify />} exact={true} />
          <Route path="/fmail" element={<Fmail />} exact={true} />
          <Route path="/:token/:id" element={<Newpass />} exact={true} />
          <Route path="/url" element={<Urls />} exact={true} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
