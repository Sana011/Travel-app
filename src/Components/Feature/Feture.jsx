import React from 'react'
import "../Feature/Feture.css"
import gift from"../../Images/Service Tips.png";
function Feture() {
  return (
    <div>
      <div className="container-fluid feture-con">
        <h1 className='fet'>Why To <span className='why'>Travel</span> With Us</h1>
       <p className='ppara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit  Debitis tenetur ipsa <br /> non, veniam facere eaque temporibus rem mollitia repellendus, <br />  quod odio quisquam nihil sit veritatis magni. Quia totam eveniet officiis!</p>
      </div>  
        <div class="cards-body">
    <div class="card-1">
    <img src={gift} alt="" srcset="" />
    <h4 class="names">Save Moneyy</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
   </div>
   <div class="card-1">
    <img src={gift} alt="" srcset="" />
    <h4 class="names">Save Moneyy</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
   </div>
   <div class="card-1">
    <img src={gift} alt="" srcset="" />
    <h4 class="names">Save Moneyy</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
   </div>
</div>
      </div>
   
  )
}

export default Feture
