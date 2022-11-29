import React,{Component} from 'react'
import './Header.css'

class Header extends Component {
 

   render() {
    return (
      <div>
        <div className="div1">
        <div className="social-media">
            <i className="fa-brands fa-dribbble"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest-p"></i>
          </div>
          <div className='div1-location'>
          <i className="fa-sharp fa-solid fa-location-dot"></i>
            <p>203 Madison Ave, NY, USA</p>
            <h2>ADDRESS</h2>
          </div>
        </div>
        <div className="div2">
          <div className="div2-logo-box">
            <img className='logo' src="https://themecraze.net/html/volia/images/logo.png"></img>
          </div>
        </div>
      </div>
    );
  }
  }

 export default Header