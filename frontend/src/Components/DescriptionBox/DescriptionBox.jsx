import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox" >
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews(122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>At Happy Farm, we know your pets are family. Our e-shop offers top-quality pet food and accessories to keep your pets healthy and happy.
        Nutritious options for all pets, including organic and specialty diets.Beds, toys, collars, grooming tools, and more for every pet.
        Supplements, dental care, flea treatments, and other health products.Easy website, secure payments, fast shipping, and helpful customer service.
        Sign up for our newsletter for exclusive offers and expert advice.At Happy Farm, your pet's happiness is our priority. Shop with us today!
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox