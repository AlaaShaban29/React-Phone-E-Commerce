import React from "react";
import { Link } from "react-router-dom";
import useGlobalContext from "../../ContextData";
import { ColumnInfo, TextCartTitle } from "./CartElement";
import PayPalButton from "./PayPalButton";

function CartTotals() {
    let {cart,  cartSubTotal,
        cartTotal,
        clearCart,
        cartTax,}=useGlobalContext()
  const emptyCart = cart.length === 0 ? true : false;

  return (
    <>
      {!emptyCart && (
        <>
          <div className="container ">
            <div className="row  d-flex justify-content-end">
              <ColumnInfo className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize ">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={clearCart}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <TextCartTitle> subtotal : {cartSubTotal}</TextCartTitle>{" "}
                  <strong>$ </strong>
                </h5>
                <h5>
                  <TextCartTitle > tax : {cartTax}</TextCartTitle> <strong>$ </strong>
                </h5>
                <h5>
                  <TextCartTitle > total : {cartTotal}</TextCartTitle>{" "}
                  <strong>$ </strong>
                </h5>
                <Link to="/NotFound">
                  <button
                    className="btn btn-outline-success text-uppercase mb-3 px-5"
                    type="button"
                  >
                    Check out
                  </button>
                </Link>
              </ColumnInfo>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CartTotals;
