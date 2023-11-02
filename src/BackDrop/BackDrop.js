import React from "react";
import './BackDrop.css'

const BackDrop= (props)=>{
    return(
        <div onClick={props.CloseHandler} className="BackDrop">

        </div>
    )
}
export default BackDrop