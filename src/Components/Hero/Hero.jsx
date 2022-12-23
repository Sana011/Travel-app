import React from 'react'
import "../Hero/Hero.css"
import Figma from"../../Images/Figma.png"
import girl from"../../Images/Girl.png"
import ellipse from"../../Images/ellip.png"
function Hero() {
  return (
    <div>
      <div className="container-fluid hero-con">
      <div className="herorowd">
        <div className="flex-left">
         <h1 className='text'><span className='saving'> Saving</span> Your Money <br /> For Travel Through <br /> Travel Fund</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Maiores blanditiis  molestiae <br /> quia rem recusandae vel.</p>
         <button className='svn'>Save Now</button>
       <div><button className='svn'>UI UX design</button></div>
       <div className='hero-logo' >
        <img src={Figma} alt="" srcset="" width={20}/> <span>Figma</span>
       </div>
       <div className='hero-logo' >
        <img src={Figma} alt="" srcset="" width={20}/> <span>Figma</span>
       </div>
       <div className='hero-logo' >
        <img src={Figma} alt="" srcset="" width={20}/> <span>Figma</span>
       </div>
        </div>
        <div className="flex-right">
        <img src={ellipse} alt="" srcset="" width={480} className="elip"/>    
        <img src={girl} alt="" srcset="" width={260} className="girl" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
