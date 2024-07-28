import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'

const RelatedProducts = (props) => {
  const {all_product} = useContext(ShopContext);
  const {product} = props;
  return (
    <div className="relatedproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {all_product.filter(item => (item.category===product.category)).slice(0,4).map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts