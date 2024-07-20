import React from 'react'
import './NewProduct.css'
import new_product from '../Assets/new_product'
import Item from '../Item/Item'

const NewProducts = () => {
  return (
    <div className="new-products">
      <h1>NEW PRODUCTS</h1>
      <hr />
      <div className="products">
        {new_product.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewProducts