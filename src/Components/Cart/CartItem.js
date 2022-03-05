import React from "react";
import useGlobalContext from "../../ContextData";
import { BtnBlack, TrashICon } from "./CartElement";
function CartItem({ id, title, img, price, total, count ,history}) {
  const { removeItem, increment, decrement } = useGlobalContext();
  return (
    <>
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt={title}
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <span className="d-lg-none">product :</span> {title}
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <strong>
            <span className="d-lg-none">price :</span> ${price}
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
          <div className="d-flex justify-content-center">
            <div>
              <BtnBlack className="btn  mx-1" onClick={() => decrement(id)}>
                -
              </BtnBlack>
              <BtnBlack className="btn  mx-1">{count}</BtnBlack>
              <BtnBlack className="btn  mx-1" onClick={() => increment(id)}>
                +
              </BtnBlack>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <div className=" cart-icon" onClick={()=>removeItem(id)}>
            <TrashICon />
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <strong>item total : ${total} </strong>
         {/* <PayPalButton/> */}
        </div>
      </div>
    </>
  );
}

export default CartItem;
