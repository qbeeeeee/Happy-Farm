import { useState, useContext, useRef } from 'react'
import React from "react" 
import './Navbar.css' 
import { Link } from 'react-router-dom'
import logo from '../Assets/Happyfarm/HappyFarm2.png' 
import logo2 from '../Assets/Happyfarm/HappyFarm3.png' 
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return(
        <div className="navbar">
            <div className="nav-logo">
                <div onClick={()=>{setMenu("shop")}} className="parents-logo-imgs">
                    <Link style={{textDecoration: "none"}} to='/'>
                    <img className="happy-farm-logo" src={logo} alt="" />
                    <img className="happy-farm-logo2" src={logo2} alt="" />
                    </Link>
                </div>
                {/* <p>SHOPPER</p> */}
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">   
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: "none"}} to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("dogs")}}><Link style={{textDecoration: "none"}} to='/dogs'>Dogs</Link> {menu==='dogs'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("cats")}}><Link style={{textDecoration: "none"}} to='/cats'>Cats</Link> {menu==='cats'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("accessories")}}><Link style={{textDecoration: "none"}} to='/accessories'>Pet Accessories</Link> {menu==='accessories'?<hr/>:<></>}</li>     
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login'> <button>Login</button> </Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar