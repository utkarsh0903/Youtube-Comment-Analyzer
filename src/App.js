import React from "react";
import './App.css';
import FetchAPI from './FetchAPI';

function App() {

  return (
    <div className="app">
      <div className="header">
      <img className="image_icon" src="./youtube.png" alt="Logo"></img>
      <h1>Youtube Comment Analyzer</h1>
      </div>
      
      <div className="search_bar">
        <FetchAPI />
        
      </div>
    </div>
  );
}

export default App;