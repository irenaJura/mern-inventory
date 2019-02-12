import React, { Component } from 'react';
import Products from './components/products';
import ViewProduct from './components//view-product';
import CreateProduct from './components/create-product';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Products</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Product</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Products} />
          <Route path="/view/:id" component={ViewProduct} />
          <Route path="/create" component={CreateProduct} />
        </div>
      </Router>
    );
  }
}

export default App;
