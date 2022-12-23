import React from 'react'
import saving from"../../Images/savingbox.jpg"

import bar from"../../Images/bar.jpg"
import "../TravelCashback/TravelCashBack.css"
function CashBack() {
  return (
    <div>
      <div className="container-fluid hero-con">
      <div className="herorowSS">
      <div className="flex-left">
            <img src={bar} alt="" srcset="" />
         <h1 className='text'><span className='saving'> Save</span>  Money For Travel  <br /> Travel Fund</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Maiores blanditiis  molestiae <br /> quia rem recusandae vel Lorem ipsum dolor sit, <br /> amet consectetur adipisicing elit. Unde, autem..</p>
      <button className='strt-btn'>Lets Start</button>
      
        </div>
        <div className="flex-rightsS">
       <img src={saving} alt="" srcset="" width={400}/>
        </div>
       
      </div>
      </div>
    </div>
  )
}

export default CashBack
