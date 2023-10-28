import React from 'react';
import pic from '../Image/update1.jpeg'

function Header() {
  return (
    <div>
        <div style={{backgroundImage :`url(${pic})` , width:"100%", height:"150px"}}>
            <h1 style={{color:"white"}}>FMG-Timeline</h1>
        </div>
    </div>
  )
}

export default Header
