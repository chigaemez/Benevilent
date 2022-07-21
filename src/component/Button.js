import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'


const Button = ({onSubmit}) => {
  
  return(
    <div className='carts'> 
       <button className='Add-cart' onClick={onSubmit}> <FaShoppingCart/> <span className='span'>Add to Cart</span> </button>
  
    </div>
  )
}

export default Button
