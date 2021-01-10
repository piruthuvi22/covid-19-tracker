import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../static/corona.jpg";
import "../app.css";
// import { fetchCountry } from "../api/api";

import Table from "./Table/table";
import Home from "./Home/Home";

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <div className="container-fluid">
          <img src={Logo} className="mx-2" alt="Logo" height="40" width="40" />
          <Link to="/" className="navbar-brand text-light">
            COVID-19
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-light">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-light active"
                  aria-current="page"
                >
                  Home <i className="fas fa-home"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/stastic" className="nav-link text-light active">
                  Statistic Data <i className="fas fa-chart-bar"></i>
                </Link>
              </li>
            </ul>

            <div className="d-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span className="text-light h6">
                    <Link
                      className="nav-link text-light"
                      to={{
                        pathname: "https://github.com/piruthuvi22",
                      }}
                      target="_blank"
                    >
                      Developed by Piruthuvi <i className="fab fa-github"></i>
                    </Link>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="text-light h6">
                    <Link
                      className="nav-link text-light"
                      to={{
                        pathname:
                          "https://rapidapi.com/slotixsro-slotixsro-default/api/covid-19-tracking",
                      }}
                      target="_blank"
                    >
                      API <i className="far fa-question-circle"></i>
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stastic">
          <Table />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
