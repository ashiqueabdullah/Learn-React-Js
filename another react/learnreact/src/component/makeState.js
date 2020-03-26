import React, {Component} from 'react'

class MakeState extends Component{
    constructor(){
        super()
        var obj={
            color:["red","green"],
            name:"Mango",
            country:{
                one:"Bangladesh",
                two:"India"
            }
        }
        this.state=obj;
    }
    render(){
        return(
            <div>
                <h1>{this.state.color[1]}Color {this.state.country.one} {this.state.name}</h1>
            </div>
        )
    }
}
export default MakeState