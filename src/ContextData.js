import React, { createContext, useContext, useEffect, useState } from "react";
import { detailProduct, storeProducts } from "./data";
const ContextData = createContext([]);
function getLocalStorage() {
  let cartItem = localStorage.getItem("cartCommerce");
  if (cartItem) {
    return JSON.parse(cartItem);
  } else {
    return [];
  }
}
export function ContextDataProvider({ children }) {
  const [productsList, setProductsList] = useState(storeProducts);
  const [details, setDetails] = useState(detailProduct);
  const [cart, setCart] = useState(getLocalStorage());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  function handleDetails(id) {
    let newDetails = productsList.find((item) => item.id === id);
    setDetails(newDetails);
  }
  function addToCart(id) {
    let tempProducts = [...productsList];
    let newDetails = productsList.find((item) => item.id === id);
    const index = tempProducts.indexOf(newDetails);
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProductsList(tempProducts);
    setCart([...cart, product]);
  }
  function openModal(id) {
    let newDetails = productsList.find((item) => item.id === id);
    setModalProduct(newDetails);
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function increment(id) {
    let tempCart=[...cart]
const selectedProduct=tempCart.find((item)=>item.id===id)
const index =tempCart.indexOf(selectedProduct)
const product =tempCart[index]
product.count=product.count+1
product.total=product.count * product.price
setCart(tempCart)
  }
  function decrement(id) {

    let tempCart=[...cart]
    const selectedProduct=tempCart.find((item)=>item.id===id)
    const index =tempCart.indexOf(selectedProduct)
    const product =tempCart[index]
    product.count=product.count-1
if(product.count===0){
  tempCart=tempCart.filter((cartItem) => cartItem.count!==0)

}   

else{
  product.total=product.count * product.price

}
  setCart(tempCart)
  console.log(tempCart)
  }

  function removeItem(id) {
const tempProduct=[...productsList]
    const tempCart=cart.filter((item) => item.id !== id);
const index=tempProduct.indexOf(productsList.find((item) => item.id === id))
let removeProduct=tempProduct[index]
removeProduct.inCart=false
removeProduct.count=0
removeProduct.total=0
    setCart(tempCart)
    setProductsList(tempProduct)

  }
  function clearCart(){
    setCart([])
  }
  function addTotals(){
    let subTotal = cart.reduce((acc, item) => (acc += item.total), 0);
    const tempTax=subTotal*0.1
    const tax=parseFloat(tempTax.toFixed(2 ))
    const total=subTotal+tax
    setCartTotal(total)
    setCartSubTotal(subTotal)
    setCartTax(tax)
  }
  useEffect(() => {
    addTotals()
    localStorage.setItem("cartCommerce", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <ContextData.Provider
        value={{
          cartSubTotal,
          addTotals,
          cartTotal,
          cartTax,
            clearCart,
            removeItem,
            increment,
            decrement,
            productsList,
            setProductsList,
            details,
            setDetails,
            handleDetails,
            addToCart,
            openModal,
            closeModal,
            modalProduct,
            isModalOpen,
            cart
        }}
      >
        {children}
      </ContextData.Provider>
    </>
  );
      }
function useGlobalContext() {
  return useContext(ContextData);
}
export default useGlobalContext;
