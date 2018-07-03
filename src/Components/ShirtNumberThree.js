import React from "react";
import HtownMens from "../img/htown_mens.png";
import BoxToBuy from "./BoxToBuy";



function ShirtNumberThree (){
  return(
    <div className="mock-box">
    <img src={HtownMens} className="image-format" />
    <BoxToBuy/>
    </div>
  
  )

}

export default ShirtNumberThree;