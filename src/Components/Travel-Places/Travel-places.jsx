import React from 'react'
import ellipses from"../../Images/ellip2.png"
import men from"../../Images/men.png"
import bar from"../../Images/bar.jpg"
import "../Travel-Places/Travel-places.css"
function Travel() {
  return (
    <div>
         <div className="container-fluid hero-con">
      <div className="herorowS">
        <div className="flex-rights">
        <img src={ellipses} alt="" srcset="" width={550} className="elips"/>    
        <img src={men} alt="" srcset="" width={300} className="boy" />
        </div>
        <div className="flex-left">
            <img src={bar} alt="" srcset="" />
         <h1 className='text'><span className='saving'> Save</span>  Money For Travel  <br /> Travel Fund</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Maiores blanditiis  molestiae <br /> quia rem recusandae vel Lorem ipsum dolor sit, <br /> amet consectetur adipisicing elit. Unde, autem..</p>
      
      
        </div>
      </div>
      </div>
    </div>
  )
}

export default Travel
