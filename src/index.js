import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="register" element={<Register />} />
    <Route path="login" element={<Login />} />
    <Route path="cart" element={<Cart />} />
    <Route path="productlist" element={<ProductList />} />
    <Route path="product" element={<Product />} />
  </Routes>
</BrowserRouter>,

  document.getElementById('root')
);