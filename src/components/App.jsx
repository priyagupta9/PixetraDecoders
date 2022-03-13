import '../App.css';
import React from 'react';
import Otp from "./OtpPage/Otp";
import Product from "./ProductsPage/Product"
import ProductFlow from './ProductFlowP1Page/ProductFlow';
import Login from "./LoginPage/Login"

function App() {
  return (
    <div>
    <Login />
    <Otp />
    <Product />
    <ProductFlow />
    </div>
  );
}

export default App;
