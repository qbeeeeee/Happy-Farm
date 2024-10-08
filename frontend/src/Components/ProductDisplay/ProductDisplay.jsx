import React, {useContext} from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product?product.image:""} alt="" />
                <img src={product?product.image:""} alt="" />
                <img src={product?product.image:""} alt="" />
                <img src={product?product.image:""} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product?product.image:""} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product?product.name:""}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product?product.old_price:""}</div>
                <div className="productdisplay-right-price-new">${product?product.new_price:""}</div>
            </div>
            <div className="productdisplay-right-description">

            </div>

            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            :<Link to='/login'> <button>ADD TO CART</button> </Link>}

            {/* <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> */}
            <p className='productdisplay-right-category'><span>Category :</span> Dog , Food</p>
            <p className='productdisplay-right-category'><span>Tags :</span> Latest , Food</p>
        </div>
    </div>
  )
}

export default ProductDisplay