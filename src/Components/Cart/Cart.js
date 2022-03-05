import React from "react";
import useGlobalContext from "../../ContextData";
import Title from "../Title/Title";
import CartColumns from "./CartColumns";
import { SectionCart } from "./CartElement";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";

function Cart() {
  let {cart}=useGlobalContext()
  if(cart.length===0){
    return<>
    <EmptyCart/>
    </>
  }
  return (
    <SectionCart >
    <Title name="your" title="cart" />
    <CartColumns/>
<CartList/>
<CartTotals />
  </SectionCart>
  );
}

export default Cart;
