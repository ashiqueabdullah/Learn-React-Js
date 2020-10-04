import React from 'react'


let Allcomponent= (props)=>{
    return (
        <div>
            <h1>Name: {props.name} And Age {props.age}</h1>
    <h3>Extra info: {props.children}</h3>
        </div>
    );
}

export default Allcomponent;