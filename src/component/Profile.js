
import {FaShoppingCart} from 'react-icons/fa'
import React, {useState, useContext} from 'react'
import Carts from './Carts'

import { GlobalContext } from '../context/GlobalState'

const Profile = () => {
  const[carts, setCarts] = useState(false);
  // eslint-disable-next-line 
  const {item} = useContext(GlobalContext)
   
  return (
    <div className='card-shopping'>
      <span className='span'>{item.length}</span>
      <FaShoppingCart className='cart-icon' onClick={() => setCarts(!carts)}/>
      {carts && <Carts/>}
    </div>
  )
}

export default Profile
