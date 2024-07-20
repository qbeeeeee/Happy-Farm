import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/Happyfarm/instagram_icon.png'
import whatsapp_icon from '../Assets/Happyfarm/whatsapp_icon.png'
import logo from '../Assets/Happyfarm/HappyFarm2.png' 
import logo2 from '../Assets/Happyfarm/HappyFarm3.png' 

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <div className="footer-parents-logo-imgs">
                <img className="footer-happy-farm-logo" src={logo} alt="" />
                <img className="footer-happy-farm-logo2" src={logo2} alt="" />
            </div>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer