import React,{Component} from 'react'




class Allcomponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>Name: {this.props.name} Age {this.props.age}</h1>
            </div>
        );
    }
}

export default Allcomponent;