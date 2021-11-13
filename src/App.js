import React from "react";
import "./App.css";
import InputsConnected from "./components/InputsConnected";
import ContentConnected from "./components/ContentConnected";

function App() {
  return (
    <div className="App">
      <InputsConnected />
      <div className="contentContainer">
        <ContentConnected />
      </div>
    </div>
  );
}

export default App;
