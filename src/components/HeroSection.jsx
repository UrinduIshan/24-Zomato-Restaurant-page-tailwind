import React from 'react'
import { VIDEO_URL, PLAY_STORE_URL, APP_STORE_URL } from '../utils/app.constants'
import zomatoImg from '../assets/zomato.png'
import arrowDown from '../assets/double-arrow.svg'


const HeroSection = () => {
  return (
    <div className='h-screen w-screen relative'>
      <video src={VIDEO_URL} className='absolute inset-0 w-full h-full object-cover -z-10' autoPlay loop playsInline muted />

      <div className='-z-10 absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent'></div>

      <div className='flex flex-col items-center justify-center h-full pt-80'>
        <img src={zomatoImg} alt="zomato-icon" className='w-52' />
        <div className='mb-5 px-5 text-center font-semibold text-5xl text-white mt-8'>Sri Lanka's #1 <br /> food delivery app</div>
        <span className='text-white text-2xl px-5 text-center'>Experience fast & easy online ordering <br /> on the Zomato app</span>

        <div className='flex gap-6 mt-10'>
          <img src={PLAY_STORE_URL} alt="play-store-image" className='w-44 cursor-pointer' />
          <img src={APP_STORE_URL} alt="app-store-image" className='w-44 cursor-pointer' />
        </div>

        <div className='flex items-center justify-center gap-2 mt-8 animate-bounce'>
          <span className='text-white font-medium'>Scroll down</span>
          <img src={arrowDown} alt="double-arrow-icon" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
