import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.sass';
import Product from './components/Product/Product';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Inforce_TestTask" element={<Navigate to="/" replace />} />
          <Route path='/' element={<ProductList/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='*' element={<h1> Page not found </h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
