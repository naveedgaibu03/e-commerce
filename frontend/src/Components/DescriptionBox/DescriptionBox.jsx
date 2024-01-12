import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
      <div className="descriptionbox-description">
        <p>UrbanBoutiq.com is your go-to online shopping hub, connecting buyers and sellers seamlessly. 
            As a virtual marketplace, we redefine convenience, 
            enabling businesses and individuals to showcase and sell their finest products. 
            Dive into a world of effortless transactions, style, and variety—all without the need for a physical presence. 
            UrbanBoutiq.com: Your shortcut to a chic and hassle-free online shopping experience!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
