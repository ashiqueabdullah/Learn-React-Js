import React from 'react';
import './App.css';
import Test from './functional';
import Classtest from './classf'

function App() {
  return (
    <div className="App">
      <h1>I am Learning React</h1>
      <Test name="Ashique Abdullah"></Test>
      <Classtest age="24"></Classtest>
    </div>
  );
}

export default App;
