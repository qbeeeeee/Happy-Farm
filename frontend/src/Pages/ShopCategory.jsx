import React from 'react'
import './CSS/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
 
const ShopCategory = (props) => {

  const {all_product,setAll_Product} = useContext(ShopContext);
  let productperpage = 0;
  let a = 11;

  const addMore = () => {
    let itemProduct = document.getElementById("categoryProducts");
    if(itemProduct.children.length > a){
      for (let i = a; i < itemProduct.children.length; i++) {
        itemProduct.children[i].classList.remove("item-page");
      }
      a += 11;
      console.log("heyy");
    }
    if(itemProduct.children.length < a){
      document.getElementById("exploreMoreButton").classList.add("explore-more-button");
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
            <span>Showing 1-12</span> out of 36 products
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
            {all_product.map((item,i)=>{
              if(props.category===item.category){
                productperpage += 1;
                return <Item classItemPage={productperpage>12?true:false} key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null;
              }
            },)}
        </div>
        <div id="exploreMoreButton" onClick={addMore} className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory