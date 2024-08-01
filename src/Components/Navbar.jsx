import React from 'react'

function Navbar() {
  return (
    <nav className='container relative mx-auto  p-6 border'>
      {/* flex container for nav items....................... */}
      <div className='border flex items-center justify-between space-x-20 my-6'>
        {/* logo */}
        <div className='z-30'>
        <img src='https://great-white.in/int/images/greatwhiteelectricals-logo.png ' className='h-10'/>
        </div>
        {/* menu items */}
        <ul className='hidden items-center border space-x-14 font-medium md:flex'>
          <li>home</li>
          <li>products</li>
          <li>our story</li>
        </ul>
        <ul className='hidden items-center border space-x-10 font-medium md:flex'>
          <li>home</li>
          <li>home</li>
          
        </ul>

      </div>
        

        
    </nav>
  )
}

export default Navbar