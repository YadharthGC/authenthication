import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Urls() {
  const [urls, seturls] = useState([]);
  const [datas, setdatas] = useState([]);
  const navigate = useNavigate();

  useEffect(async () => {
    await fetch();
  }, [datas]);

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      let post = await axios.post(
        "https://yadharthauth.herokuapp.com/urls",
        { urls },
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
      window.alert(post.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  let fetch = async () => {
    try {
      let get = await axios.get("https://yadharthauth.herokuapp.com/geturl", {
        headers: {
          Authorization: window.localStorage.getItem("app_token"),
        },
      });
      setdatas([...get.data]);
    } catch (error) {}
  };

  return (
    <div className="URL">
      <div className="url">
        <div className="urlbox">
          <div className="heading">URL Shortener</div>
          <form
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            <div className="inputa">
              <input
                type="text"
                placeholder="URL"
                id="password"
                value={urls}
                onChange={(e) => {
                  seturls(e.target.value);
                }}
              />
            </div>
            <div className="inputa">
              <input type="submit" value="shorten" id="registersubmit" />
            </div>
          </form>
        </div>
      </div>
      <div className="urltable">
        <div clssName="urlstable">
          <table>
            <thead>
              <tr>
                <td className="key">S.no.</td>
                <td className="key">Links</td>
                <td className="key">Shorts</td>
                <td className="key">Clicks</td>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => {
                return (
                  <tr>
                    <td className="keyans">{index}</td>
                    <td className="keyansl">
                      <a href={data.urls} target="_blank">
                        {data.urls}
                      </a>
                    </td>
                    <td className="keyans">
                      <a
                        href={`https://yadharthauth.herokuapp.com/api/${data.shorts}`}
                        target="_blank"
                      >
                        {data.shorts}
                      </a>
                    </td>
                    <td className="keyans">{data.clicks}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="logout">
        <div className="log">
          <button
            className="out"
            onClick={() => {
              window.localStorage.removeItem("app_token");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Urls;
