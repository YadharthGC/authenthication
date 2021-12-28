import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function Urls() {
  const navigate = useNavigate();
  const params = useParams();
  const [url, seturl] = useState([]);
  const [short, setshort] = useState([]);

  useEffect(() => {
    fetch();
  }, [short]);

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      let post = await axios.post(
        "https://yadharthauth.herokuapp.com/url",
        { url },
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
      let get = await axios.get("https://yadharthauth.herokuapp.com/shorts", {
        headers: {
          Authorization: window.localStorage.getItem("app_token"),
        },
      });
      setshort([...get.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Urls">
      <div className="title">URL Shortener</div>
      <div className="urls">
        <div className="urlbox">
          <form
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            <div className="urltext">
              <input
                type="text"
                placeholder="Type the URL"
                value={url}
                onChange={(e) => {
                  seturl(e.target.value);
                }}
                id="urltext"
              />
            </div>
            <div className="shortsubmit">
              <input type="submit" value="Shorten" id="shortsubmit" />
            </div>
          </form>
        </div>
      </div>
      <div className="title">Created URLs</div>
      <div className="urltable">
        <table>
          <thead>
            <tr>
              <td className="key">S.NO</td>
              <td className="key">URL</td>
              <td className="key">SHORT</td>
              <td className="key">CLICKS</td>
            </tr>
          </thead>
          <tbody>
            {short.map((data, index) => {
              return (
                <tr>
                  <td className="keyans">{index}</td>
                  <td className="keyans">
                    <a href={data.url} target="_blank">
                      {" "}
                      {data.url}
                    </a>
                  </td>
                  <td className="keyans">
                    <a
                      href={`https://yadharthauth.herokuapp.com/${data.shorts}`}
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
  );
}

export default Urls;
