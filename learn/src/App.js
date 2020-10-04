import React from 'react';
import './App.css';
import Allcomponent from './component/allcomponent'
import { Component } from 'react';

// function App() {
//   return (
//     <div>
//       <h1>My Name is:</h1>
//       <Allcomponent />
//     </div>
//   );
// }


class App extends Component{
  render(){
    return (
      <div>
      <h1>My Name is:</h1>
      <Allcomponent />
    </div>
    );
  }
}




export default App;
