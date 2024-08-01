import React from 'react'
import './NewsLetter.css'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input id="email" type="email" placeholder="Your Email:" />
            <Link style={{ color: 'black', textDecoration: "none" }} to={"login"} ><button>Subscribe</button></Link>
        </div>
    </div>
  )
}

export default NewsLetter