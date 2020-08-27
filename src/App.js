import React from "react";
import "./App.css";
import Shop from "./components/Shop/Shop.js";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row title">
          <div className="col-md-2">
            <img src={logo} className="img-fluid p-1" alt="Logo" />
          </div>
          <div className="col-md-10">
            <h1 className="title">Online Learning</h1>
          </div>
        </div>
      </div>
      <Shop></Shop>
    </div>
  );
}

export default App;
