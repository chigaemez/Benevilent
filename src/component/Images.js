import React  from 'react'
import { useState } from 'react'
import image from './ImageHolder'


const Images = () => {

const [selectedImage, setSelectedImages] = useState([3])

  return (
    <div>
      <div className='image-holder'>
        <img src= {selectedImage} alt="" />
      </div>
      <div className='image-container'>
      
         {
          image.map((img, index) => (
            <img src={img} alt="" />
          ))
         }

      </div>
    </div>
  )
}

export default Images
