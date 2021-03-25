import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-class">
      <nav className="navbar-component">
        <div className="brand-class">
          <div className="brand-text">
            <Link to="/" style={{ textDecoration: "none" }}>
              Sreejan Chaudhury
            </Link>
          </div>
        </div>
        <div className="navbar-items">
          <h4 className="nav-item-text">
            <Link to="#work" style={{ textDecoration: "none" }}>
              Work
            </Link>
          </h4>
          <h4 className="nav-item-text">
            <Link to="#about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </h4>
          <h4 className="nav-item-text">
            <Link to="#contact" style={{ textDecoration: "none" }}>
              Contact
            </Link>
          </h4>
        </div>
      </nav>
    </div>
  );
}
