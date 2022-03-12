import React from 'react';
import Phone from "./Phone";
import "./styles/WhiteBtn.css"

function WhiteBtn(props)
{
        return(  
            <div className="white-box">
            {
                (props.img) ? <img src={props.img} alt="phone" /> : <p></p>
            }
            {
                (props.text) ? <p className='white-text'>{props.text}</p> : <Phone />
            }
            </div>
        )
}

export default WhiteBtn;