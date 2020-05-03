import React from "react";
import "./style.css";
import "./links.css"

const isDisabled = (isDisabled) => {
  if (isDisabled)
    return "nav-link disabled";
  return "nav-link";
}

function NavItem(props) {
  return (
    <li className="nav-item active">
      <a className={isDisabled(props.disabled)} href="about.html">About <span className="sr-only">(current)</span></a>
    </li>
  )
