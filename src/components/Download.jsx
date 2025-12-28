import React from 'react'
import { PLAY_STORE_URL, APP_STORE_URL, PHONE_IMG_URL, QR_CODE_IMG_URL } from '../utils/app.constants'

const Download = () => {
  return (
    <div className='bg-linear-to-b from-[#FFEDEF] to-[#FFDBE0] py-30 flex justify-center gap-20'>
      <div className='flex justify-center flex-col'>
        <span className='text-[2.5rem] font-bold'>Download the app now!</span>
        <span className='text-2xl mt-3 text-gray-600'>Experience seamless online ordering <br /> only on the Zomato app</span>

        <div className='flex gap-3 mt-5'>
            <img src={PLAY_STORE_URL} alt="play-store" className='w-47 h-14 cursor-pointer' />
            <img src={APP_STORE_URL} alt="app-store" className='w-47 h-14 cursor-pointer' />
        </div>
      </div>

      <div className="relative">
        <img src={PHONE_IMG_URL} alt="phone-image" className="w-75" />

        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className='text-center w-56'>
            Scan the QR code to <br /> download the app
            </span>
            <img src={QR_CODE_IMG_URL} alt="qr-code" className="w-32" />
        </div>
      </div>
    </div>
  )
}

export default Download
   