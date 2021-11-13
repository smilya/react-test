import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import ContentConnected from './components/ContentConnected';


function App() {
  return (    
    <div className="App">
      <Inputs />
      <div className="contentContainer">
        <ContentConnected />
      </div>
    </div>
  );
}

export default App;
