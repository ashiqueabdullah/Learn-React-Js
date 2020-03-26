import React from 'react';
import './App.css';
import Test from './functional';
import Classtest from './classf';
import MakeState from './makeState'

function App() {
  return (
    <div className="App">
      <h1>I am Learning React</h1>
      <Test name="Ashique Abdullah"></Test>
      <Classtest age="24"></Classtest>
      <MakeState></MakeState>
    </div>
  );
}

export default App;
