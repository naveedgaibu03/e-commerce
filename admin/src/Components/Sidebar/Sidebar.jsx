import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Prodcut_Cart.svg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoderation:"none"}}>
               <div className="sidebar-item">
                <img src={add_product_icon} alt="" />
               </div>
        </Link>
    </div>
  )
}

export default Sidebar