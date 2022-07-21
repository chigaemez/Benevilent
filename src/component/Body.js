import React, { useContext, useState} from 'react'
import Head from './Head'
import AddItem from './AddItem'
import { GlobalContext } from '../context/GlobalState'
import Button from './Button'
const Body = ({text}) => {
 const {addTransaction} = useContext(GlobalContext)

  const [Add, setAdd] = useState(125.00)

  const onSave= (e) => {
    e.preventDefault()

  

    const newTransaction={
      id:Math.floor(Math.random() *100000000000),
      text,
      Add
    }

    addTransaction(newTransaction)
  }


  

  return (
    <div className='body'>
      <p className='company'>{text}</p>
        <Head/>
      <h3 className='text'>These low-profile sneakers are your perfect casual wears companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer</h3>  
      

      <h2>{Add}<span>50%</span></h2>
      <h3 className='off'>$250.00</h3>


      <div className='cartFlexer'>
          <AddItem onAdd={() => setAdd(Math.max(Add +125.00, ))} onRemove={() => setAdd(Math.max(Add - 125.00, 125.00))}/>
          <Button onSubmit={onSave} />
        </div>
  
    </div>
  )
}

Body.defaultProps ={
  text:'Sneakers Company'
}

export default Body
