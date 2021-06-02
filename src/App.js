import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

import "./App.css";
import "./index.css";
import Data from "./Data";

function App() {
  return (
    <>
      <header>
        <BrowserRouter>
          <div className="container">
            <nav className="nav">
              <ul>
                <li>
                  <Link to="./.js">Home</Link>
                </li>
                <li>
                  <Link to="/about.js">About</Link>
                </li>
                <li>
                  <Link to="/products.js">Products</Link>
                </li>
                <li>
                  <Link to="/contact.js">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/.js" exact component={Home}></Route>
            <Route path="/about.js" exact component={About}></Route>
            <Route path="/products.js" exact component={Products}></Route>
            <Route path="/contact.js" exact component={Contact}></Route>
          </Switch>
        </BrowserRouter>
        <Router>
          <div>
            <ShoppingCart />
          </div>
        </Router>
      </header>
      <div className="background-image"></div>
    </>
  );
}

export default App;
