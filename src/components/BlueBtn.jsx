import '../styles/Button.css';
import React from 'react';

function Bluebtn({text}) {
    return (
      <div className='btn-box'>
        <button className='btn'>
          {text}
        </button>
      </div>
    );
  }
  
export default Bluebtn;
  