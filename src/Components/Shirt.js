import React from "react";
import MontroseMensGreen from "../img/montrose_mens green.png";
import BoxToBuy from "./BoxToBuy";

function Shirt (props){

  return(
    <div className="mock-box">
    <img src={props.shirt.imageURL} className="image-format" />
    <BoxToBuy shirt = {props.shirt}/>
    </div>


  )

};

export default Shirt;