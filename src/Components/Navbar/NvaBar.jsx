import React from 'react'
import "../Navbar/NavBar.css"
import logo from "../../Images/Logo-Nav.png"
function NvaBar() {
  return (
    <div>
   <div className="container-fluid">
    <div className="Navbr">
  <a href="/"><img src={logo} alt="" srcset="" width={90} className="logo" /></a>
   <ul className='ms-auto'>
  <li><a href="#" className='active'>Home</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">Contact</a></li>
  <li><a href="#">About</a></li>

  <button className='contct-btn'>Contact Us</button>
</ul>
</div>
   </div>
  
    </div>
  )
}

export default NvaBar
