import React, {Component}  from 'react'

class Cont extends Component{
    constructor(props){
        super(props)
        this.state={
            conunt:0,
            color:'black'
        }
    }
    ins = ()=>{
        this.setState({
            conunt:this.state.conunt+1
        })
        if(this.state.conunt<5 || this.state.conunt>15){
            this.setState({
                color:'red'
            })
        }else{
            this.setState({
                color:'green'
            })
        }
    }

    dis = ()=>{
        this.setState({
            conunt:this.state.conunt-1
        })
    }
    render(){
        return (
            <div>
                <h1 style={ {color: this.state.color} }><span onClick={this.dis}>-</span>
                { this.state.conunt }
                <span onClick={this.ins}>+</span></h1>
            </div>
        )
    }
}


export default Cont