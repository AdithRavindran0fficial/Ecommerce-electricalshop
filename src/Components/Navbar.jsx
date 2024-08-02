import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const [toggle,settoggle] =  useState(false)
  const handleToggle = ()=>{
    settoggle(!toggle)
  }
  return (
    <nav className='container relative mx-auto  p-6 '>
      {/* flex container for nav items....................... */}
      <div className=' flex items-center justify-between space-x-20 my-6'>
        {/* logo */}
        <div className='z-30'>
        <img src='https://great-white.in/int/images/greatwhiteelectricals-logo.png ' className='h-10'/>
        </div>
        {/* menu items */}
        <ul className='hidden items-center  space-x-14 font-medium md:flex'>
          <li>home</li>
          <li>products</li>
          <li>Brands</li>
        </ul>
        <ul className='hidden items-center  space-x-10 font-medium md:flex'>
          <li><FaShoppingCart/></li>
          <li>home</li>
          
        </ul>

        <div className='md:hidden'>
          <FaBars onClick={handleToggle} />
        </div>

      </div>
      {toggle&&<div className='container  mx-auto bg-transparent md:hidden'> 
        <ul className='flex flex-col items-center '>
          <li className='py-2 font-medium' onClick={handleToggle}>home</li>
          <li className='py-2 font-medium' onClick={handleToggle}>about</li>
          <li className='py-2 font-medium' onClick={handleToggle}>products</li>
          <li className='py-2 font-medium' onClick={handleToggle}><FaShoppingCart/></li>
          <li className='py-2 font-medium' onClick={handleToggle}>login</li>
        </ul>


      </div>}
      
        

        
    </nav>
  )
}

export default Navbar