import React from "react";
import ReactDOM from "react-dom";

import GamerConsole from "./GamerConsole";
import GamerRaiz from "./GamerRaiz";

import "./css/index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";

const BaseLayout = () => (
  <div className="base">
    <Header />
    <div className="pages">
      <Route path="/" exact component={Home} />
      <Route path="/gamer-console" component={GamerConsole} />
      <Route path="/gamer-raiz" component={GamerRaiz} />
    </div>
    <Footer />
  </div>
);

ReactDOM.render(
  <Router>
    <BaseLayout />
  </Router>,
  document.getElementById("root")
);
