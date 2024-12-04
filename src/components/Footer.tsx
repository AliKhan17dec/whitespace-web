import React from 'react'
import Image from 'next/image'
import logo from '../../public/Logo.png'

const Footer = () => {
  return (
    <div>
      <div className='w-[1200px] h-[461px] py-[220px] px-[140px]'>
        <div className='flex text-white justify-between'>
          <div className='w-56 p'>
          <ul>
            <li><Image 
            src={logo} 
            alt='Logo'           
            /></li>
            <li>Whitespce was created for a new ways we live and work. We make a better workspace around the world</li>
          </ul>
          </div>
          <div>
            <ul>
              <li className='font-bold'>Product</li>
              <li>OverView</li>
              <li>Pricing</li>
              <li>Customer</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='font-bold'>Resources</li>
              <li>Blog</li>
              <li>Guides & tutorial</li>
              <li>Help center</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='font-bold'>Company</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
        </div>
       
      </div>
      <div className=''> 
          <p className='text-white text-center pb-10'>© 2021 Whitespace LLC</p>
        </div>
    </div>
  )
}

export default Footer
