import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./style.css";
import "./links.css"


function Nav() {
  const [activePage, setActivePage] = useState("/about");

  return (
    <div className="bg-white">
      <nav className="navbar navbar-expand-md row max960 autoMarginlr">
        <div className="navbar-brand column nameDiv"><strong>Austin Cox</strong></div>
        <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto justify-content-end">
            <li className="nav-item">
              <Link className={(activePage==="/about") ?  "nav-link disabled" : "nav-link" } to="/about" onClick={() => setActivePage("/about")}>About</Link>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <Link className={(activePage==="/portfolio") ?  "nav-link disabled" : "nav-link" } to="/portfolio" onClick={() => setActivePage("/portfolio")}>Portfolio</Link>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <Link className={(activePage==="/contact") ?  "nav-link disabled" : "nav-link" }  to="/contact" onClick={() => setActivePage("/contact")}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
