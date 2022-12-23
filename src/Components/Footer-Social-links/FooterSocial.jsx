import React from 'react'
import Figma from"../../Images/Figma.png"
import pearl from"../../Images/pearl.png"
import ellipse from"../../Images/ellip.png"
import "../../Components/Footer-Social-links/FooterSocial.css"
import bar from"../../Images/bar.jpg"
function FooterSocial() {
  return (
    <div>
       <div className="container-fluid sfooter">
      <div className="herorow ">
        <div className="flex-left">
        <img src={bar} alt="" srcset="" />
       <h4>Thanks For</h4>
       <h4 className='indent'>Watching</h4>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Maiores blanditiis  molestiae <br /> quia rem recusandae vel.</p>
      <div className="botom-footer">
      <img src={Figma} alt="" srcset="" width={20}/> 
        <img src={Figma} alt="" srcset="" width={20}/> 
        <img src={Figma} alt="" srcset="" width={20}/> 
      </div>
        
 
        </div>
        <div className="flex-right">
        <img src={ellipse} alt="" srcset="" width={400} className="elip"/>    
        <img src={pearl} alt="" srcset="" width={350}  className="girl" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default FooterSocial
