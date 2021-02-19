import React from 'react'
import "../styles/Child.css"
import {useState} from "react"

const Selection = (props)=> 
{
    // console.log(props.key );
    // console.log(props.applyColor);
   const {key}  = props;
   const {applyColor} = props;
  
    //console.log(props);
    const[Component_state , setComponent_state]  = useState({background:""});
  // console.log( nextBackground);
   
    return (
        <div style={Component_state}  className="fix-box" onClick={applyColor} >
            <h2 className="subheading">Selection</h2>       
        </div>
    )
}

export default Selection

