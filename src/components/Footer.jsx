import React from 'react'
import { PLAY_STORE_URL, APP_STORE_URL } from '../utils/app.constants'

const Footer = () => {
  return (
    <div className='bg-black text-white p-20 md:px-36 flex flex-col'>
      <span className='text-3xl font-medium'>Zomato</span>
      <span className='mt-8 hover:underline cursor-pointer'>Visit Help Center</span>

      <div className='flex justify-between gap-2 mt-8 flex-wrap'>
        <div>
            <span className='text-lg font-medium'>Company</span>
            <div className='flex flex-col gap-3 mt-2'>
                <span className='text-sm'>About us</span>
                <span className='text-sm'>Our offerings</span>
                <span className='text-sm'>Newsroom</span>
                <span className='text-sm'>Investors</span>
            </div>
        </div>

        <div>
            <span className='text-lg font-medium'>Quick Links</span>
            <div className='flex flex-col gap-3 mt-2'>
                <span className='text-sm'>Home</span>
                <span className='text-sm'>Shop</span>
                <span className='text-sm'>Best Sellers</span>
                <span className='text-sm'>Deals</span>
            </div>
        </div>

        <div>
            <span className='text-lg font-medium'>Customer Support</span>
            <div className='flex flex-col gap-3 mt-2'>
                <span className='text-sm'>FAQs</span>
                <span className='text-sm'>Shipping & Delivery</span>
                <span className='text-sm'>Returns & Refunds</span>
                <span className='text-sm'>Privacy Policy</span>
            </div>
        </div>

        <div>
            <span className='text-lg font-medium'>Follow Us</span>
            <div className='flex flex-col gap-3 mt-2'>
                <span className='text-sm'>Instagram</span>
                <span className='text-sm'>Facebook</span>
                <span className='text-sm'>Twitter / X</span>
                <span className='text-sm'>LinkedIn</span>
            </div>
        </div>

      </div>

      <div className='mt-10 flex items-center gap-4'>
        <img src={PLAY_STORE_URL} alt="play-store" className='w-47 h-14 cursor-pointer' />
        <img src={APP_STORE_URL} alt="app-store" className='w-47 h-14 cursor-pointer' />
      </div>

      <span className='mt-4 text-sm text-gray-400'>&copy; 2026 Zomato Technologies Inc.</span>
    </div>
  )
}

export default Footer
