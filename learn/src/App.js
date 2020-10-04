import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div>
  //     <h1>My Name is:</h1>
      
  //   </div>
  // );

  return React.createElement('div',null,React.createElement('h1',null,'My name Is:'),<Name />);
}

function Name() {
  // return (
  //   <div>
  //     <h2>Ashique Abdullah</h2>
  //   </div>
  // );
  return React.createElement('div',null,React.createElement('h1',null,'Md: Ashique Abdullah'));
}

  


export default App;
