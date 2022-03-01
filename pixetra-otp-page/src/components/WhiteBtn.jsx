import React, { useState } from 'react';

function WhiteBtn({img})
{
    const [number, setNumber] = useState("");
    function numberChange(element){
      let value=element.value;
      if(isNaN(value)) return false;
      
      setNumber(value);
      if(value.length > 10){
        return false;
      }
    }
        return(  
            <div className="number-box">
            <img src={img} alt="phone" />
            <div className='nr-input'>
                <span>+91</span>
                <input
                type="tel"
                name="mobile"
                label="Enter Phone Number"
                title='Number'
                required
                value={number}
                maxLength="10"
                onChange={e => numberChange(e.target)}
                />
            </div>
            </div>
        )
}

export default WhiteBtn;