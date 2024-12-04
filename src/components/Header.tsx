import React from 'react'
import Image from 'next/image'
import logo from '../../public/Logo.png'


const Header = () => {
  return (
    <div className='fixed w-full h-[92px] bg-[#043873] flex justify-between items-center pl-36'>
      <div className=''>
      <Image 
      src={logo}
      alt='Logo'
      width={191}
      height={34}
      />
      </div>
      <div className='w-[737.5px] h-[60px] flex gap-[120px] items-center'>
        <ul className='flex text-white gap-[32px]'>
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
        </ul>
        <div className=''>
            <button className='bg-[#FFE492] hover:bg-yellow-100 w-[110px] h-[50px] rounded'>
                Login
            </button>
        </div>
      </div>
    </div>
  )
}

export default Header
