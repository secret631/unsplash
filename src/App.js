import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage/ProductPage';

const App = () => {

return (


    <div >
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ProductDetails/:Id' element={<ProductPage/>} />
        </Routes>

    </div>




        
    )
}

export default App



