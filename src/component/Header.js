import React from 'react'
import Link from './Link'

const Header = () => {
  return (
    <header className='header-container'>
      <h2 className='header'>Sneakers</h2>
      <Link text='Collection'/>
      <Link text='Men'/>
      <Link text='Women'/>
      <Link text='About'/>
      <Link text='Contact'/>

      
      
      
    </header>
  )
}

export default Header
