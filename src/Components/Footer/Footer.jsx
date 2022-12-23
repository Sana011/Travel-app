import React from 'react'
import logos from "../../Images/Logo-Nav.png";
import "../Footer/Footer.css"
function Footer() {
  return (
    <div>
      <div className="container-fluid bg-FooTEr">
        <div className="footer">
            <div className="sec1">
                <img src={logos} alt="" srcset="" width={100} />
                <p>TRASAVE ipsum dolor sit amet consectetur adipisicing elit. Iusto, sed!</p>
                <div className="slinks">
                <i class="fas fa fa-facebook" aria-hidden="true"></i>
                <i class="fas fa fa-facebook" aria-hidden="true"></i> <i class="fas fa fa-facebook" aria-hidden="true"></i> <i class="fas fa fa-facebook" aria-hidden="true"></i>
                </div>
            </div>
            <div className="sec1">
                <h5 className='ab-us'>About Us</h5>
                <h6>Techincal</h6>
                <h6>Other Products</h6>
            </div>
            <div className="sec1">
                <h5 className='ab-us'>Contact Us</h5>
                <h4>Bnglor India</h4>
                <h4>Sh@gmail.com</h4>
            </div>
            <div className="sec1">
                <h4>Subscribe <span className='news'> News Letter</span></h4>
                <input type="search"  className='sb' />
                <button className='svn'>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
