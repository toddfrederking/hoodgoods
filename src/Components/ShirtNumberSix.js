import React from "react";
import SharpstownWomensRed from "../img/sharpstown_womens_red.png";
import BoxToBuy from "./BoxToBuy";


function ShirtNumberSix (){
  return(
    <div className="mock-box">
    <img src={SharpstownWomensRed} className="image-format" />
    <BoxToBuy/>
  </div>
  )

}

export default ShirtNumberSix;