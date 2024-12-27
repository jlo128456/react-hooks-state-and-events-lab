import React, { useState } from "react";


function Item({ name, category }) {

  //track state when item in the cart
  let [inCart, setInCart] =   useState(false);

  //toggle the function when item is added or removed from cart
  const toggleStatusInCart = () => {
      setInCart((prevInCart) => !prevInCart)
  };



  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={ toggleStatusInCart }>{inCart ? "Remove From cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
