import React from "react";
import {Link , NavLink } from "react-router-dom";

export default function Navpar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: "#2c3e50", 
        padding: "20px 0",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to=''
          style={{
            color: "#fff",
            fontSize: "28px",
            textTransform: "uppercase",
          }}
        >
          START FRAMEWORK
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold"
                to="About"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                }}
              >
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold"
                to="Portfolio"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                }}
              >
                PORTFOLIO
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold"
                to="Contact"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                }}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
