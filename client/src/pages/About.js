import React from "react";
import { Col, Row } from "../components/Grid";
import "../assets/css/common.css";

const About = props => {
  
  return (
    <div className="content">
      <Row>
        <h1 className="headers pad-20-l">About Me</h1>
      </Row>
      <hr id="sep" />
      <Row className="contentData">
        <Col size="md-3">
          <img src="../assets/images/profile.jpg" alt="profile" className="contentImage" />
        </Col>
        <Col size="md-9" className="contentText">
          <p>My name is Austin Cox. I am an avid programmer and work too late sometimes. I have lengthy experience in Python, some experience in C++, and Fortran coding languages. I am curently extending my knowledge to HTML, CSS, Javascript and others.</p>
          <p>I very much enjoy coding and sometimes get stuck on my current task and forget about other things, but it's okay because I am having fun and learning.</p>
          <p>Besides coding, I also enjoy playing Australian Rules Football, and am Vice-President of the <a href="http://www.seattlegrizzlies.com/">local USAFL club.</a></p>
          <a href="https://github.com/austin-e-cox"><strong>GitHub</strong></a>
          <br />
          <a href="https://www.linkedin.com/in/austin-cox-b584215b/"><strong>LinkedIn</strong></a>
          <br />
          <a href="assets/other/Resume 2020.pdf"><strong>Resume</strong></a>
          <br />
          <a href="mailto:austin.ed.cox@gmail.com?Subject=Web%20Dev%20Portfolio"><strong>Email Me!</strong></a>
          <br />
          <strong>Phone number:</strong> 214-384-6793
        </Col>
      </Row>
    </div>
  );
};

export default About;