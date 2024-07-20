import { useState } from 'react'
import React from "react" 
import './Navbar.css' 
import { Link } from 'react-router-dom'
import logo from '../Assets/Happyfarm/HappyFarm2.png' 
import logo2 from '../Assets/Happyfarm/HappyFarm3.png' 
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("shop")

    return(
        <div className="navbar">
            <div className="nav-logo">
                <div className="parents-logo-imgs">
                    <img className="happy-farm-logo" src={logo} alt="" />
                    <img className="happy-farm-logo2" src={logo2} alt="" />
                </div>
                {/* <p>SHOPPER</p> */}
            </div>
            <ul className="nav-menu">   
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: "none"}} to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("dogs")}}><Link style={{textDecoration: "none"}} to='/dogs'>Dogs</Link> {menu==='dogs'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("cats")}}><Link style={{textDecoration: "none"}} to='/cats'>Cats</Link> {menu==='cats'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("birds")}}><Link style={{textDecoration: "none"}} to='/birds'>Birds</Link> {menu==='birds'?<hr/>:<></>}</li>     
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'> <button>Login</button> </Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar