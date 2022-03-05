import React from 'react'
import useGlobalContext from '../../ContextData'
import Product from '../Product/Product'
import Title from '../Title/Title'

function ProductList() {
    const {productsList, setProductsList}=useGlobalContext()

    return (
        <>
     <div className='py-5'>
<div className='container'>
<Title name="our" title="products" />

    <div className='row'>

    {productsList.map((product)=><Product key={product.id} {...product}/>)}
    </div>
</div>
         </div> 
        </>
    )
}

export default ProductList
