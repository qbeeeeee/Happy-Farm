import React, { useState } from 'react'
import './CSS/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
 
const ShopCategory = (props) => {

  const {all_product,setAll_Product} = useContext(ShopContext);
  const [visible,setVisible] = useState(12);
  let productlength = all_product.filter(item => (item.category===props.category)).length;

  const showMoreItems = () => {
    if(visible<productlength){
      setVisible((prevValue) => prevValue + 12);
    }
    else{
      console.log("list empty");
    }
  }

  const sortByNumChange = (event) => {
    let sb = document.querySelector('#sort-by');
    if(sb.value === "1"){
      all_product.sort((a,b)=>(a.new_price < b.new_price ? 1 : -1));
      setAll_Product([
        ...all_product,
        {}
      ]);
      window.scrollTo({ bottom: 0, behavior: 'smooth' })
    }
    if(sb.value === "2"){
      all_product.sort((a,b)=>(a.new_price > b.new_price ? 1 : -1));
      setAll_Product([
        ...all_product,
        {}
      ]);
    }
    if(sb.value === "3"){
      all_product.sort((a,b)=>(a.date > b.date ? 1 : -1));
      setAll_Product([
        ...all_product,
        {}
      ]);
    }
    if(sb.value === "4"){
      all_product.sort((a,b)=>(a.date > b.date ? 1 : -1));
      setAll_Product([
        ...all_product,
        {}
      ]);
    }

  }

  return (
    <div id="yo" className="shop-category">
        <img className={(props.category === "accessories") ? "shopcategory-banner1"  : "shopcategory-banner"} src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing {visible>productlength?productlength:visible}</span> out of {productlength}
          </p>
          {/* <div className="shopcategory-sort">
            sort by <img src={dropdown_icon} alt="" />
          </div> */}
          <select onChange={sortByNumChange} name="" id="sort-by" defaultValue="Sort" className="shopcategory-sort">
            <option hidden value>Ταξινόμηση κατά:</option>
            <option value="1" >Τιμή:υψ-χαμ</option>
            <option value="2" >Τιμή:χαμ-υψ</option>
            <option value="3">Προτεινόμενα</option>
            <option value="4">Πιο πρόσφατα</option>
          </select>
        </div>
        <div id="categoryProducts" className="shopcategory-products">
            {all_product.filter(item => (item.category===props.category)).slice(0,visible).map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            },)}
        </div>
        <div id="exploreMoreButton" onClick={showMoreItems} className={visible<productlength? "shopcategory-loadmore": "shopcategory-loadmore2"}>
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory