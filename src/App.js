import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Register from "./register";
import Login from "./login";
import Verify from "./verify ";
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
          <Route path="/fgmail" element={<Fmail />} exact={true} />
          <Route path="/:token/:id" element={<Newpass />} exact={true} />
          <Route path="/urls" element={<Urls />} exact={true} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
