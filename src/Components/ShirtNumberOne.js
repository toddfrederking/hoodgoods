import React from "react";
import MontroseMensGreen from "../img/montrose_mens green.png";
import BoxToBuy from "./BoxToBuy";

function ShirtNumberOne (){
  return(
    <div className="mock-box">
    <img src={MontroseMensGreen} className="image-format" />
    <BoxToBuy/>
    </div>


  )

};

export default ShirtNumberOne;