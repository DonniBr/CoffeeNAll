import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path ="/" element={<ProductList />} />
                <Route path ="/products/:id" element={<ProductDetails />} />

            </Routes>
        </Router>
    )
}

export default App;