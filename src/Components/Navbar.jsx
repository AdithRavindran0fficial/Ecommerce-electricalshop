import React from 'react'

function Navbar() {
  return (
    <nav className='border-2 flex'>
        <div className='ml-10'>
        <img src='https://great-white.in/int/images/greatwhiteelectricals-logo.png ' className='pt-10 '/>
        </div>
        
        <header className='border-4 pt-10 flex container justify-evenly'>
            <ul className='flex border '>
                <li className='px-10'>Home</li>
                <li className='px-10'>Home</li>
                <li className='px-10'>Home</li>
                <li className='px-10'>Home</li>
            </ul>

        <ul className='flex border'>
            <li className='px-10'>login</li>
            <li className='px-10'>cart</li>
        </ul>



        </header>
    </nav>
  )
}

export default Navbar