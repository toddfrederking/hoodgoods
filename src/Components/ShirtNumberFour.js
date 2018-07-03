import React from "react";
import MontroseWomensNavy from "../img/montrose_womens_navy.png";
import BoxToBuy from "./BoxToBuy";



function ShirtNumberFour (){
  return (
    <div className="mock-box">
      <img src={MontroseWomensNavy}className="image-format" />
      <BoxToBuy/>
    </div>


  )

}

export default ShirtNumberFour;