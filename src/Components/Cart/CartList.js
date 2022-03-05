import React from 'react'
import useGlobalContext from '../../ContextData'
import CartItem from './CartItem'

function CartList() {
    let {cart}=useGlobalContext()
    return (
        <>
            <div className="container-fluid">
            {cart.map((item,index) => (
          <CartItem key={index} {...item}  />
        ))}
      </div>   
        </>
    )
}

export default CartList
