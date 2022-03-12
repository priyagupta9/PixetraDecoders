import './styles/Otp.css';
import React from 'react';
import Number from "./Number";
import logo from "./img/512.png"

function Otp() {
  return (
    <div className='otp-page'>
      <img src={logo} alt="logo" className='logo'/>
      <Number />
      <a href="/">Need help?</a>
    </div>
  );
}

export default Otp;
