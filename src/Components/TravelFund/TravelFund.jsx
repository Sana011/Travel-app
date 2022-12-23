import React from 'react'
import ellipses from"../../Images/ellip.png"
import gilds from"../../Images/Fund.png"
import bar from"../../Images/bar.jpg"
import "../../Components/TravelFund/TravelFund.css"
function TravelFund() {
  return (
    <div>
         <div className="container-fluid hero-con">
      <div className="herorowS">
        <div className="flex-left">
            <img src={bar} alt="" srcset="" />
         <h1 className='text'><span className='saving'> Save</span>  Money For Travel  <br /> Travel Fund</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Maiores blanditiis  molestiae <br /> quia rem recusandae vel.</p>
      
      
        </div>
        <div className="flex-right">
        <img src={ellipses} alt="" srcset="" width={550} className="elip"/>    
        <img src={gilds} alt="" srcset="" width={350} className="girl" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default TravelFund
