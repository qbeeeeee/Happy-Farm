import React, {useContext, useEffect, useState} from 'react'
import {ShopContext} from '../../Context/ShopContext'
import './PaymentForm.css'

const PaymentForm = () => {
    const {getTotalCartAmount,all_product,cartItems} = useContext(ShopContext);
    const [cartItems2, setCartItems2] = useState([]);

    if(!localStorage.getItem('auth-token')){
        window.location.replace('login');
    }

    useEffect(() => {
        // Create a new object to hold the items that should be added to cartItems2
        const updatedCartItems = {};

        all_product.forEach((e) => {
            if (cartItems[e.id] > 0) {
                updatedCartItems[e.id] = {
                    ...e,
                    quantity: cartItems[e.id],
                };
            }
        });

        // Set the new state with the accumulated items
        setCartItems2(updatedCartItems);
    }, [all_product, cartItems]);

    const handleFields = () => {
        let address = getAddress();

        if (!address) {
            alert("All Fields Are Required!");
        } else {
            fetch('http://localhost:4000/stripe-checkout', {
                method: 'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    items: Object.values(cartItems2),
                    address: address,
                })
            })
            .then(res => res.json())
            .then(url => {
                window.location.href = url
            })
            .catch(err => console.log(err));
        }
    }
        
    const getAddress = () => {
        let state = document.getElementById('state').value;
        let street = document.getElementById('street').value;
        let city = document.getElementById('city').value;
        let fnumber = document.getElementById('f-number').value;
        let snumber = document.getElementById('s-number').value;
        let fname = document.getElementById('f-name').value;
        let lname = document.getElementById('l-name').value;
        let zip = document.getElementById('zip').value;

        if(!state.length || !street.length || !city.length || !fnumber.length || 
            !snumber.length || !fname.length || !lname.length || !zip.length){
                return null;
        }else{
            return {state,street,city,fnumber,snumber,fname,lname,zip};
        }
    }

  return (
    <div onLoad={window.scrollTo(0,0)} className="paymentform">
        <div className="paymentform-container">
            <div>
                <div className="paymentform-format-main">
                    <p>Products</p>
                    <p>title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                <hr />
                <div className='paymentform-itemslist'>
                {all_product.map((e)=>{
                    if(cartItems[e.id]>0)
                    {
                        return <div>
                                    <div className="paymentform-format paymentform-format-main">
                                        <img className='paymentform-product-icon' src={e.image} alt="" />
                                        <p>{e.name}</p>
                                        <p>${e.new_price}</p>
                                        <button className='paymentform-quantity'>{cartItems[e.id]}</button>
                                        <p>${e.new_price*cartItems[e.id]}</p>
                                    </div>
                                    <hr />
                                </div>
                    }
                    return null;
                })}
                </div>
            </div>
            <div className="paymentform-container2">
                <div className="paymentform-form">
                        <h1>
                            Shipping Details
                        </h1>
                            <div className="name">
                                <div>
                                    <label>First Name</label>
                                    <input id="f-name" type="text" name="f-name"/>
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input id="l-name" type="text" name="l-name"/>
                                </div>
                            </div>
                            <div className="street">
                                <label>Street</label>
                                <input id="street" type="text" name="address"/>
                            </div>
                            <div className="address-info">
                                <div>
                                    <label>City</label>
                                    <input id="city" type="text" name="city"/>
                                </div>
                                <div>
                                    <label>State</label>
                                    <input id="state" type="text" name="state"/>
                                </div>
                                <div>
                                    <label>Zip</label>
                                    <input id="zip" type="text" name="zip"/>
                                </div>
                            </div>
                            <div className="numbers">
                                <div>
                                    <label>Number</label>
                                    <input id="f-number" type="text" name="number"/>
                                </div>
                                <div>
                                    <label>Second Number</label>
                                    <input id="s-number" name="secondnumber"/>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
        <div className="paymentform-down">
            <div className="paymentform-total">
                <h1>cart Totals</h1>
                <div>
                    <div className="paymentform-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="paymentform-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="paymentform-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <div>
                    <button onClick={handleFields}>Place Order</button>
                    </div>
                </div>
            </div>
            <div className="paymentform-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="paymentform-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentForm