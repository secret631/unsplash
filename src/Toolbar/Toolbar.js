import React from "react";
import "./Toolbar.css"

const Toolbar = (props)=>{

    return(
        <div>
 <div className="Toolbar">

        <div className="Toolbar_Navigation">

            <div className="SingIn">
                <button>
                    <a href="./Signin.html"> 
                          Sign In
                    </a>
                </button>
            </div>

            <div className="logo">
                <img src="./Assets/logo.png" />
            </div>


            <i onClick={props.OpenHandler} className="bars large inverted grey icon berger"></i>

            <div className="Navigation_Items">
                <ul>
                    <li>
                        <a href="https://google.com" target="_blank">About Us</a>
                    </li>
                    <li>
                        <a href="/">Products</a>
                    </li>
                    <li>
                        <a href="/">Contant Us</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
        </div>
    )

}

export default Toolbar