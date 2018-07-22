import React from "react";



function Shirt (props){

  return(
    <div className="mock-box">
    <img src={props.shirt.imageURL} className="image-format" />
    
    </div>


  )

};

export default Shirt;