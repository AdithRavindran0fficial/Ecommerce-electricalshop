import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const [toggle,settoggle] =  useState(false)
  const [toggle_cat,setToggle_cat] = useState(false)

  const handleToggle = ()=>{
    settoggle(!toggle)
  }

  const handle_cat = ()=>{
    setToggle_cat(!toggle_cat)
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
        <ul className='hidden items-center  space-x-14 font-medium lg:flex'>
          <li className='text-gray-900 text-xl font-bold tracking-wide hover:text-gray-700'>home</li>
          <li className='text-gray-900 text-xl font-bold tracking-wide hover:text-gray-700'onClick={handle_cat}>products</li>
          <li className='text-gray-900 text-xl font-bold tracking-wide hover:text-gray-700'>our story</li>
        </ul>
        <ul className='hidden items-center  space-x-10 font-medium lg:flex'>
          <li className='text-gray-400 text-lg font-medium hover:text-gray-900'><FaShoppingCart/></li>
          <li className='text-gray-400 text-lg font-medium hover:text-gray-900'>Login</li>
          
        </ul>

        <div className='lg:hidden'>
          <FaBars onClick={handleToggle} />
        </div>

      </div>
      {toggle_cat&&<div className='hidden container relative top-0 bg-slate-200 lg:block'>
        <ul className='flex justify-around border space-x-10 py-20'>
          <li onClick={handle_cat} >Wiring and Cables</li>
          <li  onClick={handle_cat}>Lighting </li>
          <li  onClick={handle_cat}>Switches and Sockets</li>
          <li  onClick={handle_cat}>Home Automation</li>
          <li  onClick={handle_cat}>Electrical Appliances</li>
          <li onClick={handle_cat}>Solar and Renewable Energy</li>
        </ul>
        

      </div>}
      {toggle&&<div className='container  mx-auto bg-transparent lg:hidden'> 
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