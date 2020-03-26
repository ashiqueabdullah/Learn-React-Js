import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Test(props){
    function clc(a){
        alert(a)
    }
    var arfun = (f)=>{
        alert(f)
    }
    return(
        <div>
            <button className="btn btn-success" onClick={clc.bind(this,"Kaj korse ami ekta function")}>Button From function</button>
            <h1>I am {props.name}</h1>
            <button className="btn btn-info mb-2" onClick={arfun.bind(this,"valu come from arrow function")}>Arrow Function</button>
        </div>
    )
}
export default Test