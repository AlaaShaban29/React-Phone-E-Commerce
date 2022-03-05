import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import Navbar from '../Navbar/Navbar';
import ProductList from '../ProductList/ProductList';
import { BrowserRouter } from 'react-router-dom';
import  Modal from '../Modal/Modal';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
<Routes>
<Route exact path='/' element={<ProductList/>}>

</Route>
<Route  path='/details' element={<Details/>}>
</Route>
<Route  path='/cart' element={<Cart/>}>
</Route>
<Route path='*' element={<NotFound/>} />

</Routes>
<Modal/>

    </BrowserRouter>
    
          </>
  );
}

export default App;
