import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

const AddItem = ({onAdd, onRemove}) => {
  const [Add, setAdd] = useState(1)
  

  return (

    <div className='addings'>


      <FaMinus onClick={() => setAdd(Math.max(Add - 1, 1))} className='minus' onMouseUp={onRemove} />
      <p className='number'>{Add}</p>
      <FaPlus className='plus' onClick={() => setAdd(Math.max(Add +1, 0))} onMouseDown={onAdd} />
    </div>
  )
}

export default AddItem
