import React from 'react'
import { Link } from 'react-router-dom';
import { ModalContainer } from './ModalElement'
import { ButtonContainer } from "../../GlobalStyle";
import useGlobalContext from '../../ContextData';

function Modal() {
    let {isModalOpen,closeModal,modalProduct}=useGlobalContext()
    const {img,price,title}=modalProduct
   
    return (
<>
{isModalOpen? <>
         <ModalContainer>
         <div className="container pt-5">
                  <div className="row pt-3">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                    >
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ${price}</h5>
                      <Link to="/">
                        <ButtonContainer  onClick={() => {
                            closeModal();
                          }}>
                          Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          primary
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
             </ModalContainer>   
        </>:''}

</>    )
}

export default Modal
