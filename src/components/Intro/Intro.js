import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="intro-container">
      <div>
        <h1 className="intro-name">Hey I'm Sreejan</h1>
        <h2 className="intro-desc">a passionate full stack developer.</h2>
        {/* <p className="work-btn">
          <Link to="#work" style={{ textDecoration: "none" }}>
            See my work
          </Link>
        </p> */}
      </div>
      <div className="intro-img-container">
        <img
          src="undraw_programming.svg"
          alt=""
          className="intro-img"
          height="400px"
          width="700px"
        />
      </div>
    </div>
  );
}
