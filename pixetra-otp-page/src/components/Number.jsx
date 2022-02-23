import React, { useState } from 'react';
import "../styles/Number.css";
import  mobile from "../img/mobile.png"

function Number() {

  const [otp, setOtp] = useState(new Array(6).fill(""))

  function handleChange(element, index){
    let value=element.value;
    if(isNaN(value)) return false;

    setOtp([...otp.map((d,idx) => (idx === index)? value : d )])
    //move to next input
    if(element.nextSibling) {
      element.nextSibling.focus();
    }
  }

  return (
    <div>
      <form action="/" method="post" name="validtelephone">
        <div className="phone">
          <div className="number-box">
            <img src={mobile} alt="phone" />
            <div>
              <span>+91</span>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
          </div>
          <div className="otp-box">
          {
            otp.map((data, index)=>{
              return (
                <input type="text"
                name="otp"
                className='otp-field'
                key={index}
                value={data}
                onChange={e => handleChange(e.target, index)}
                 />
              )
            })
          }
          </div>
        </div>
      </form>
    </div>
  );
}

export default Number;
