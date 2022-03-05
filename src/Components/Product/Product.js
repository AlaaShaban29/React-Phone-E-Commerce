import React from "react";
import { Link } from "react-router-dom";
import useGlobalContext from "../../ContextData";
import { ProductWrapper } from "./ProductElement";
import {FaCartPlus} from 'react-icons/fa'
function Product({
  id,
  title,
  price,
  img,
  company,
  inCart,
  count,
  info,
  total,
}) {
let {handleDetails,addToCart,openModal}=useGlobalContext()
  return (
    <>
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={()=>handleDetails(id)}>
            <Link to="/details">
              <img src={img} alt={title} className="card-img-top" />
            </Link>
            <button
                    className="cart-btn"
                    disabled={inCart?true:false}
                    onClick={()=>{
                      addToCart(id);
                      openModal(id);
                    }
                    }
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                    <FaCartPlus/>
                    )}
                  </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
          
      </ProductWrapper>
    </>
  );
}

export default Product;
