import React from 'react';
import './App.css';
import Allcomponent from './component/allcomponent'
import { Component } from 'react';


class App extends Component{
  render(){
    return (
      <div>
      <h1>My </h1>
      <Allcomponent name="Ashique Abdullah" age="24">
        It's worrking
      </Allcomponent>
    </div>
    );
  }
}




export default App;
