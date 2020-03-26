import React, {Component} from 'react'

class MakeState extends Component{
    constructor(){
        super()
        this.state={
            color:["red","green"],
            name:"Mango",
            country:{
                one:"Bangladesh",
                two:"India"
            }
        }
    }
    ch= (a)=>{
        this.setState({
            name:a
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.color[1]}Color {this.state.country.one} {this.state.name}</h1>
                <button onClick={this.ch.bind(this,"black")} className="btn btn-info">Chage State value</button>
            </div>
        )
    }
}
export default MakeState