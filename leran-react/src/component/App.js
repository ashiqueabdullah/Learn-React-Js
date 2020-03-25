import React from 'react';
import './App.css';
import First from './First/first';
//First clsaa name, first file name

function App() {
  let p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est quam a ex aliquam quis tenetur quia laboriosam corporis vitae. Itaque illum modi culpa vel. Doloribus labore mollitia cupiditate amet";
  return (
    <div className="App">
     <First name="Ashique Abdullah" email="ashique@gmail.com" address="29 Rajar Golli"/>
     <First name=" Abdullah" email="ashique@gmail.com" address="29 Rajar Golli"/>
    </div> 
  );
}

export default App;
