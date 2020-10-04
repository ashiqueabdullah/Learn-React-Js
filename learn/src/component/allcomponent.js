import React,{Component} from 'react'




class Allcomponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>Book Name: {this.props.name} Book author {this.props.author}</h1>
            </div>
        );
    }
}

export default Allcomponent;