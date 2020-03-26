import React, {Component} from 'react'

class Classtest extends Component{
     clcs(){
        alert("Kaj korse");
    }
    render(){
        return(
            <div>
                <button onClick={this.clcs}>Button From Class</button>
                <h2>I am {this.props.age} years old</h2>
            </div>
        )        
    }
}
export default Classtest