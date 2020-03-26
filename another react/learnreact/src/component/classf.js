import React, {Component} from 'react'

class Classtest extends Component{
     clcs(a){
        alert(a);
    }
    render(){
        return(
            <div>
                <button onClick={this.clcs.bind(this,"kaj korse ami ekta class")}>Button From Class</button>
                <h2>I am {this.props.age} years old</h2>
            </div>
        )        
    }
}
export default Classtest