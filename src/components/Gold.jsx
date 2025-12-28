import React from 'react'
import { GOLD_IMG_URL, FREE_DELIVERY_IMG_URL, SCOTTER_IMG_URL, GOLD_STAR_IMG_URL } from '../utils/app.constants'
import GoldStar from './GoldStar'
import ImageCard from './ImageCard'

const Gold = () => {
  return (
    <div className='relative bg-black py-70 mt-100 text-white flex items-center justify-center flex-col'>
      <img src={GOLD_IMG_URL} alt="gold image" className='w-76.5 h-33.5' />

      <div className='mt-6 text-xl flex flex-col font-normal bg-linear-to-r from-[#8c6115] via-[#E9C789] to-[#996F25] bg-clip-text text-center text-transparent'>
        <span>Sri Lanka's Top Savings</span>
        <span>Program for Food Lovers</span>
      </div>

      <div className='mt-6 flex items-center justify-center gap-2'>
        <GoldStar />
        <span className='text-2xl font-medium tracking-[4px]'>GOLD BENEFITS</span>
        <GoldStar />
      </div>

      <div className='flex gap-10 mt-8'>
        <ImageCard imageUrl={FREE_DELIVERY_IMG_URL} title="Free Delivery" secondaryTitle="At all restaurants within 7km" />
        <ImageCard imageUrl={SCOTTER_IMG_URL} title="Up to 30% extra off" secondaryTitle="At 20 000+ partner restaurants" />
      </div>

      <img src={GOLD_STAR_IMG_URL} alt="gold-star-image" className='w-76 absolute top-0 right-0 ' />
      <img src={GOLD_STAR_IMG_URL} alt="gold-star-image" className='w-44 absolute top-3 left-0 rotate-1' />
    </div>
  )
}

export default Gold
