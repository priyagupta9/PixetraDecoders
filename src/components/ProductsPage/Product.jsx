import './styles/product.css';
import React from 'react';
import Header from "./Header"
import Photobook from "./Photobook"
import  photobookbg from "./img/photobookbg.png"
import BottomNavbar from "./BottomNavbar"

function Product() {
  return (
    <div className='product-page'>
      <Header name="Joe" />
      <Photobook img={photobookbg} />
      <Photobook img={photobookbg} />
      <Photobook img={photobookbg} />
      <Photobook img={photobookbg} />
      <BottomNavbar />
    </div>
  );
}

export default Product;
