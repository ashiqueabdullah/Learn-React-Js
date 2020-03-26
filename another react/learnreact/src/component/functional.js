import React, {Component} from 'react'

function Test(props){
    function clc(){
        alert("Click korci")
    }
    return(
        <div>
            <button onClick={clc}>Button From function</button>
            <h1>I am {props.name}</h1>
        </div>
    )
}
export default Test