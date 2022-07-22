import React,{useContext} from 'react'
import CartHolder from './CartHolder'
import { GlobalContext } from '../context/GlobalState'


const Carts = () => {
    const{item} = useContext(GlobalContext)

   
    
    return (
        <div className='cart'>
            <h3>Your Carts</h3>
            <hr />

            { item.map(item => <CartHolder key={item.id} item={item.name} initialPrice={item.initialPrice} quantity={item.quantity} price={item.price}/>)}
            
            <button>Check Out</button>
            
            
        </div>
    )
}

export default Carts
