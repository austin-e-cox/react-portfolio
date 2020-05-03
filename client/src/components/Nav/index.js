import React from "react";
import "./style.css";

function Nav() {

  return (
    <div className="bg-white">
      <nav className="navbar navbar-expand-md row max960 autoMarginlr">
        <div className="navbar-brand column nameDiv"><strong>Austin Cox</strong></div>
        <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto justify-content-end">
            <li className="nav-item active">
              <a className="nav-link" href="/about">About</a>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
