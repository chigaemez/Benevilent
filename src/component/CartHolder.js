import React, { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
import { GlobalContext } from '../context/GlobalState'


const CartHolder = ({item, price, quantity, initialPrice}) => {

  const deleteTransaction = (id) =>{
    console.log(id)
  }
  return (
    <div className='item-holder'>
      <h1>{item} <FaTrash className='remove-icon' onClick={() =>  deleteTransaction(item.id)}/></h1>
      <p>{price}</p>
      <span className='amount'>{quantity}</span>
      <p>{initialPrice}</p>
     
        

    </div>
  )
}

export default CartHolder
