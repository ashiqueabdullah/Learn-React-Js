import React, {Component}  from 'react'

class First extends Component{
    render(){
        return (
            <div>
                <h5>I am {this.props.name}</h5>
                <h5>Email {this.props.email}</h5>
                <h5>address {this.props.address}</h5>
            </div>
        )
    }
}


export default First