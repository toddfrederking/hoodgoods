import React from "react";
import ShirtNumberOne from "./ShirtNumberOne";
import ShirtNumberTwo from "./ShirtNumberTwo";
import ShirtNumberThree from "./ShirtNumberThree";
import ShirtNumberFour from "./ShirtNumberFour";
import ShirtNumberFive from "./ShirtNumberFive";
import ShirtNumberSix from './ShirtNumberSix';
import Shirt from './Shirt';

function HoodImages (props){
  return(
    <div className="hood-images">
    
    {
      props.tshirts.map(item => {
        return (
          <Shirt shirt = {item} />
       
        )
        console.log(props);
      })
    }

    {/* <ShirtNumberOne/>
    <ShirtNumberTwo/>
    <ShirtNumberThree/>
    <ShirtNumberFour/>
    <ShirtNumberFive/>
    <ShirtNumberSix/> */}
  
    </div>

  )
  

}

export default HoodImages;