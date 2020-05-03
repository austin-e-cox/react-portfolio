import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import { Footer } from "./components/Footer";
import { StoreProvider } from "./utils/GlobalState";
import './App.css';

function App() {
  return (
    <Router>
      <div className="allContent">
        <StoreProvider>
          <div className="bg-white">
            <Nav />
          </div>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
