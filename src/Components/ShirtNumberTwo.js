import React from "react";
import SharpstownWomensRoyal from "../img/sharpstown_womens_royal.png";
import BoxToBuy from "./BoxToBuy";

function ShirtNumberTwo () {
  return (
    <div className="mock-box">
    <img src={SharpstownWomensRoyal} className="image-format" />
    <BoxToBuy/>
  </div>
  )
}

export default ShirtNumberTwo;