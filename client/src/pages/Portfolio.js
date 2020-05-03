import React from "react";
import { Col, Row } from "../components/Grid";
import "../assets/css/portfolio.css";
import "../assets/css/common.css";


const Portfolio = props => {
  
  return (
    <div className="content">
      <Row className="tac">
        <h1 className="headers pad-20-l">Portfolio</h1>
      </Row>
      <hr id="sep" />
      <Row className="tac">
        <h3 className="headers col-md-12">Projects</h3>
      </Row>
      <Row className='align-items-center'>
        <Col size="md-6">
          <div className="tile-imgContainer">
            <img src="assets/images/urban_forage_preview.png" alt="urban forage" className="croppedImage" />
          </div>
          <div className="imageLabel">Urban Forage</div>
          <div className="imgLinks">
            <a href="https://polar-cliffs-12845.herokuapp.com/">Deployed App</a>
            <br />
            <a href="https://github.com/sarahm16/urban-forage">Repository</a>
          </div>
        </Col>
        <Col size="md-6">
          <div className="tile-imgContainer">
            <img src="assets/images/Project1-Suitcase.png" alt="project suitcase" className="croppedImage" />
          </div>
          <div className="imageLabel">Project Suitcase</div>
          <div className="imgLinks">
            <a href="https://caleb-brochu.github.io/Project-1/">Deployed App</a>
            <br />
            <a href="https://github.com/caleb-brochu/Project-1">Repository</a>
          </div>
        </Col>
      </Row>
      <div className="dash-line"></div>
      
      <Row className="tac">
        <h2 className="headers col-md-12">Weeklies</h2>
      </Row>

      <Row className="align-items-center">
        <Col size="md-6">
          <div className="tile-imgContainer">
            <img src="assets/images/passGenPreview.png" alt="password generator" className="croppedImage" />
          </div>
          <div className="imageLabel">Password Generator</div>
          <div className="imgLinks">
            <a href="https://austin-e-cox.github.io/PasswordGenerator/">Deployed App</a>
            <br />
            <a href="https://github.com/austin-e-cox/PasswordGenerator">Repository</a>
          </div>
        </Col>

        <Col size="md-6">
          <div className="tile-imgContainer">
            <img src="assets/images/jsQuizPreview.png" alt="javascript quiz" className="croppedImage" />
          </div>
          <div className="imageLabel">JS Quiz</div>
          <div className="imgLinks">
            <a href="https://austin-e-cox.github.io/jsQuiz/">Deployed App</a>
            <br />
            <a href="https://github.com/austin-e-cox/jsQuiz">Repository</a>
          </div>
        </Col>
      </Row>
      
      <Row className='align-items-center'>
        <Col size="md-6">
          <div className="tile-imgContainer">
            <img src="assets/images/dayPlannerPreview.png" alt="day planner" className="croppedImage" />
          </div>
          <div className="imageLabel">Day Planner</div>
          <div className="imgLinks">
            <a href="https://austin-e-cox.github.io/Day-Planner/">Deployed App</a>
            <br />
            <a href="https://github.com/austin-e-cox/Day-Planner">Repository</a>
          </div>
        </Col>
        <Col size="md-6">
          <div className="tile-imgContainer">
            <img src="assets/images/burger_preview.png" alt="burger database" className="croppedImage" />
          </div>
          <div className="imageLabel">Burger MVC</div>
          <div className="imgLinks">
            <a href="https://still-dawn-64377.herokuapp.com/">Deployed App</a>
            <br />
            <a href="https://github.com/austin-e-cox/burger">Repository</a>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default Portfolio;