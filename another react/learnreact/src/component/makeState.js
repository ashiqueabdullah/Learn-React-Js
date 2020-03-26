import React, {Component} from 'react'

class MakeState extends Component{
    constructor(){
        super()
        this.state={
            color:"red",
            name:"Mango"
        }
    }
    render(){
        return(
            <div>
                <h1>Color {this.state.color}</h1>
            </div>
        )
    }
}
export default MakeState