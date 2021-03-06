import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import { Footer } from "./components/Footer";
import "./assets/css/app.css";

function App() {

  return (
    <Router>
      <div className="allContent">
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    <Footer />
    </Router>
  );
}

export default App;
