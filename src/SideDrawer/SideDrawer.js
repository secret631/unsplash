import React from "react";
import './SideDrawer.css'
const SideDrawer = (props)=>{

      let DrawerClass= 'SideDrawer'
      if (props.ISOPEN== true){
        DrawerClass ='SideDrawer Open'
      }
  
    return(
        <div>
             <div className={DrawerClass}>
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
    )
}
export default SideDrawer;