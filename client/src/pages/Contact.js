import React from "react";
import { Row } from "../components/Grid";
import "../assets/css/contact.css";
import "../assets/css/common.css";


const Contact = props => {
  
  return (
    <div className="content">
      <Row>
        <h1 className="headers pad-20-l">Contact</h1>
      </Row>
      <hr id="sep" />
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="name" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Joe Smith" />
          <small className="form-text text-muted">初めまして!</small>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" id="formControlTextarea" rows="3" placeholder="I would like to speak with you about..."></textarea>
          <small className="form-text text-muted">Anything you would like to ask.</small>
        </div>
        <button type="submit" className="btn btn-primary" id="submitForm">Submit</button>
      </form>
    </div>
  )
}

export default Contact;