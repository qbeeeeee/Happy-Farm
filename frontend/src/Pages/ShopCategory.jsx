import React from 'react'
import './CSS/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
 
const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);  
  const {all_productasc} = useContext(ShopContext);
  const {all_productdesc} = useContext(ShopContext);
  
  const sortByNumChange = () => {
    let sb = document.querySelector('#sort-by');
    if(sb.value === "1"){
      console.log("yeaaa1");
      document.getElementById("categoryProducts").style.display = "none";
      document.getElementById("categoryProductsAsc").style.display = "grid";
      document.getElementById("categoryProductsDesc").style.display = "none";
    }
    if(sb.value === "2"){
      console.log("yeaaa");
      document.getElementById("categoryProducts").style.display = "none";
      document.getElementById("categoryProductsAsc").style.display = "none";
      document.getElementById("categoryProductsDesc").style.display = "grid";
    }
    if(sb.value === "3"){
      console.log("yeaaa");
      document.getElementById("categoryProducts").style.display = "grid";
      document.getElementById("categoryProductsAsc").style.display = "none";
      document.getElementById("categoryProductsDesc").style.display = "none";
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
        <div id="categoryProductsDesc" className="shopcategory-products">
            {all_productdesc.sort((a,b)=>(a.new_price > b.new_price ? 1 : -1)).map((item,i)=>{
              if(props.category===item.category){
                return <Item key={i} id={item.id} name={1} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                  return null;
              }
            })}
        </div>
        <div id="categoryProductsAsc" className="shopcategory-products">
            {all_productasc.sort((a,b)=>(a.new_price < b.new_price ? 1 : -1)).map((item,i)=>{
              if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null;
              }
            })}
          </div>
        <div id="categoryProducts" className="shopcategory-products">
            {all_product.map((item,i)=>{
              if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null;
              }
            })}
          </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory