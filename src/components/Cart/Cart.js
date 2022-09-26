import React from "react";
import { useState } from "react";
export default function Cart() {
  //   let inCart = [];
  let [flag, setflag] = useState(false);
  let [laptop, setLaptop] = useState(0);
  let plushandler_L = () => {
    setLaptop(laptop + 1);
  };
  let minushandler_L = () => {
    if (laptop == 0) {
      alert("Quantity couldnt be negative");
    } else {
      setLaptop(laptop - 1);
    }
  };
  let addtoshandler = () => {
    // inCart.push("laptop");
    // console.log(inCart);
    setflag(true);
  };
  //   let removefromshandler = () => {
  //     inCart.remove("laptop");
  //   };
  return (
    <div>
      <h1>Cart OP</h1>
      <div>
        <h3>laptop</h3>
        <h4>price 20K</h4>
        <button onClick={plushandler_L}>+</button>
        <input type="text" value={laptop} />
        <button onClick={minushandler_L}>-</button>
        <button onClick={addtoshandler}>Add to Cart</button>
        {/* <button onClick={removefromshandler}>Remove from cart</button> */}
      </div>
      <div>
        <h3>Mobile</h3>
        <h4>price 30K</h4>
        <button onClick={plushandler_L}>+</button>
        <input type="text" value={laptop} />
        <button onClick={minushandler_L}>-</button>
        <button onClick={addtoshandler}>Add to Cart</button>
        {/* <button onClick={removefromshandler}>Remove from cart</button> */}
      </div>

      {flag === true ? (
        <div>
          <h1>In cart</h1>
          if laptop:?(<h1>Laptop</h1>
          <h1>Price 20K</h1>
          <h1>Quantity : {laptop}</h1>
          <h3>Total :{laptop * 20}K </h3>)
        </div>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </div>
  );
}
