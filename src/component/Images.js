import React  from 'react'
import imageOne from '../img/image-product-1.jpg'
import imagetwo from '../img/image-product-2.jpg'
import imagethree from '../img/image-product-3.jpg'
import imagefour from '../img/image-product-4.jpg'



const Images = () => {


  return (
    <div>
      <div className='image-holder'>
        <img src= { imageOne}alt="" />
      </div>
      <div className='image-container'>
      
         <img src={imagetwo} alt=''/>
         <img src={imagethree} alt=''/>
         <img src={imageOne} alt=''/>
         <img src={imagefour} alt=''/>

        
  
      </div>
    </div>
  )
}

export default Images
