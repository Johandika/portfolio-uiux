import React from "react";
import { logo } from "./../images/logo.png";

export default function Navbar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
      <div className="container justify-content-between">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="azonix logo" style={{ height: 40 }}></img>
        </a>
        <button
          className="navbar navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white", backgroundColor: "white" }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-3">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item ms-3">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">
                For Sale
              </a>
            </li> */}
            <li className="nav-item ms-3">
              <a
                className="nav-link"
                href="mailto:johanelyosse@gmail.com?subject=Collaborate%20With%20You&body=Hello%20Johandika">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
