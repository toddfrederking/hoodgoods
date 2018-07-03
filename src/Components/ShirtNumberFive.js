import React from "react";
import MontroseMensNavy from "../img/montrose_mens_navy.png";
import BoxToBuy from "./BoxToBuy";



function ShirtNumberFive (){
  return(
    <div className="mock-box">
    <img src={MontroseMensNavy} className="image-format" />
    <BoxToBuy/>
  </div>


  )

}

export default ShirtNumberFive;