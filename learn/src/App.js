import React from 'react';
import './App.css';
import Allcomponent from './component/allcomponent'
import { Component } from 'react';


class App extends Component{
  state={
    book:[
      {name:'Computer', author:'Ashique'},
      {name:'Java', author:'Sidra'}
  ]
  }
  render(){
    return (
      <div>
      <h1>My </h1>
      <Allcomponent name={this.state.book[0].name} author={this.state.book[0].author} />
      <Allcomponent name={this.state.book[1].name} author={this.state.book[1].author} />
    </div>
    );
  }
}




export default App;
