import React from 'react'
import "../styles/Child.css"
import {useState} from "react"

const Selection = (props)=> 
{
    
    
    const[Component_state , setComponent_state]  = useState({background:""});
    
   const filler =(nextBackground)=>{
     
      setComponent_state(nextBackground);
   }
   
   
    return (
        <div style={Component_state}  className="fix-box" onClick={()=>props.applyColor(filler)} >
            <h2 className="subheading">Selection</h2>       
        </div>
    )
}

export default Selection

