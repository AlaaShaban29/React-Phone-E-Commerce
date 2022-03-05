import React from "react";
import { CartTitle } from "./CartElement";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center  text-capitalize">
          <CartTitle>your cart is currently empty</CartTitle>
        </div>
      </div>
    </div>
  );
}
