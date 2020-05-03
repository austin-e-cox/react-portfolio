import React from "react";
import { Col } from "../Grid";
import "./style.css";

const Project = (props) => {
  const proj = props.project;
  return (
    <Col size="md-6">
      <div className="tile-imgContainer">
        <img src={proj.imgLink} alt={proj.alt} className="croppedImage" />
      </div>
      <div className="imageLabel">{proj.name}</div>
      <div className="imgLinks">
        <a href={proj.deployedLink}>Deployed App</a>
        <br />
        <a href={proj.repoLink}>Repository</a>
      </div>
    </Col>
  )
}

export default Project;