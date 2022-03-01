import React, { useState } from 'react';
import WhiteBtn from './WhiteBtn';
import "../styles/Number.css";
import  mobile from "../img/mobile.png"
import Bluebtn from "./BlueBtn"

function Number() {
  const [otp, setOtp] = useState(new Array(6).fill(""));


  function handleChange(element, index){
    let value=element.value;
    if(isNaN(value)) return false;

    setOtp([...otp.map((d,idx)=>(idx === index) ? value : d)]);

    if(element.nextSibling){
      element.nextSibling.focus();
    }
  }

  return (
    <div>
      <form action="/" method="post" name="validtelephone">
        <div className="phone">
        <WhiteBtn img={mobile} />
          <div className="otp-box"> 
            {
              otp.map((data,index) => {
                return <input 
                type="text" 
                name='otp' 
                value={data} 
                key={index}
                maxLength="1"
                onChange={e => handleChange(e.target,index)}
                />
              })
            }
          </div>
        </div>
        <Bluebtn text="RESEND OTP"/>
        <Bluebtn text="CONTINUE"/>
      </form>
    </div>
  );
}

export default Number;
