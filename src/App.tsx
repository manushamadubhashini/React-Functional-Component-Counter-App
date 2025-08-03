import React from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {
  return (
    <div className="app">
      {/*<h1>This is Counter App</h1>*/}
        <Counter data = {"Saman"}/>
    </div>
  );
}

export default App;
