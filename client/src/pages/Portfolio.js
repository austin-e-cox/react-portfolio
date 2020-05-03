import React from "react";
import { Row } from "../components/Grid";
import Project from "../components/Project"
import "../assets/css/portfolio.css";
import "../assets/css/common.css";


const projects = [
  {
    imgLink:"assets/images/urban_forage_preview.png",
    alt:"urban forage",
    name:"Urban Forage",
    deployedLink:"https://polar-cliffs-12845.herokuapp.com/",
    repoLink:"https://github.com/sarahm16/urban-forage"
  },
  {
    imgLink:"assets/images/Project1-Suitcase.png",
    alt:"project suitcase",
    name:"Project Suitcase",
    deployedLink:"https://caleb-brochu.github.io/Project-1/",
    repoLink:"https://github.com/caleb-brochu/Project-1"
  },
  {
    imgLink:"assets/images/passGenPreview.png",
    alt:"password generator",
    name:"Password Generator",
    deployedLink:"https://austin-e-cox.github.io/PasswordGenerator/",
    repoLink:"https://github.com/austin-e-cox/PasswordGenerator"
  },
  {
    imgLink:"assets/images/jsQuizPreview.png",
    alt:"javascript quiz",
    name:"JS Quiz",
    deployedLink:"https://austin-e-cox.github.io/jsQuiz/",
    repoLink:"https://github.com/austin-e-cox/jsQuiz"
  },
  {
    imgLink:"assets/images/dayPlannerPreview.png",
    alt:"day planner",
    name:"Day Planner",
    deployedLink:"https://austin-e-cox.github.io/Day-Planner/",
    repoLink:"https://github.com/austin-e-cox/Day-Planner"
  },
  {
    imgLink:"assets/images/burger_preview.png",
    alt:"burger database",
    name:"Burger MVC",
    deployedLink:"https://still-dawn-64377.herokuapp.com/",
    repoLink:"https://github.com/austin-e-cox/burger"
  }
]

const Portfolio = () => {
  
  return (
    <div className="content">
      <Row c="tac">
        <h1 className="headers pad-20-l">Portfolio</h1>
      </Row>
      <hr id="sep" />
      <Row c="tac">
        <h3 className="headers col-md-12">Projects</h3>
      </Row>
      <Row c='align-items-center'>
        <Project project={projects[0]} />
        <Project project={projects[1]} />
      </Row>
      <div className="dash-line"></div>
      
      <Row c="tac">
        <h2 className="headers col-md-12">Weeklies</h2>
      </Row>

      <Row c="align-items-center">
        <Project project={projects[2]} />
        <Project project={projects[3]} />
      </Row>
      
      <Row c='align-items-center'>
        <Project project={projects[4]} />
        <Project project={projects[5]} />
      </Row>
    </div>
  )
}

export default Portfolio;