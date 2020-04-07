import React from "react";
import logo from "./logo.svg";
import Stores from "./containers/Stores";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Stores />
      </div>
    </div>
  );
}

export default App;
