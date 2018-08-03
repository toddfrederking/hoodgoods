import React from "react";



function BabyShirt (props){

  return(
    <div className = "mini-mock-box">
    <img src={props.shirt.imageURL} className="baby-image-format" />
    <ul className="cart-list">
      <li>Size: {(props.shirt.size)}</li>
      <li>Quantity: {(props.shirt.quantity)}</li>
      <li>Price: {(props.shirt.price)}</li>
      {/* <li>Subtotal: $ {(props.shirt.quantity)}</li> */}

    </ul>

    
    </div>


  )

};

export default BabyShirt;