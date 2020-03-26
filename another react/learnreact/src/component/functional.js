import React, {Component} from 'react'

function Test(props){
    function clc(a){
        alert(a)
    }
    return(
        <div>
            <button onClick={clc.bind(this,"Kaj korse ami ekta function")}>Button From function</button>
            <h1>I am {props.name}</h1>
        </div>
    )
}
export default Test