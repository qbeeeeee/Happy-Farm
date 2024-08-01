import React, {useContext, useState} from 'react'
import './CartItems.css'
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    const [progress,setProgress] = useState(0);

    const getColor = () => {
        if(progress < 40){
            return "#ff0000";
        }else if(progress < 70){
            return "#ffa500";
        }else{
            return "#2ecc71";
        }
    }
    const resetAmount = () => {
        setProgress(getTotalCartAmount());
    }

  return (
    <div onLoad={resetAmount} className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img className='carticon-product-icon' src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className="cartitems-remove-icon" src={remove_icon} 
                                onClick={()=>{removeFromCart(e.id);setProgress(getTotalCartAmount()-e.new_price)}} alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <div className="container-progressbar">
                        <div className="progress-bar">
                            <div className="progress-bar-fill" style={{width: `${progress}%`,backgroundColor: getColor() }}>
                                
                            </div>
                        </div>
                        <div className="progress-label">{progress>=100?100:progress}%</div>
                    </div>
                </div>
                <Link style={{color: 'black',textDecoration: "none"}} to='/checkout'><button>PROCEED TO CHECKOUT</button></Link>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems