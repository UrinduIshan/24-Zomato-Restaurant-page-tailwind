import React from 'react'
import * as images from '../utils/app.constants'

const OrderSection = () => {
  return (
    <div className='h-148 relative'>
      <div className='absolute left-0 -top-44 h-auto w-[70%] translate-x-[-70%] bg-yellow-100'>
        <img src={images.LEFT_SIDE_LINE} alt="left-line-image" className='h-auto w-full'/>
      </div>
      <div className='absolute right-0 top-[-55%] h-auto w-[70%] translate-x-[65%] bg-yellow-100'>
        <img src={images.RIGHT_SIDE_LINE} alt="right-line-image" className='h-auto w-full'/>
      </div>

      <img src={images.BURGER_IMG_URL} alt="burger-image" className='w-60 absolute left-52 top-10' />
      <img src={images.MOMOS_IMG_URL} alt="momos-image" className='w-60 absolute right-52 -top-44' />
      <img src={images.PIZZA_IMG_URL} alt="pizz-image" className='w-60 absolute right-36 top-40' />
      <img src={images.TOMATO_IMG_URL} alt="tomato-image" className='w-12 absolute left-32 top-96' />
      <img src={images.TOMATO_IMG_URL} alt="tomato-image" className='w-12 absolute right-32 -top-10 rotate-45' />
      <img src={images.LEAVES_IMG_URL} alt="leaves-image" className='w-12 absolute left-[30%] -top-38' />

      <div className='w-[30%] text-center m-auto flex items-center justify-center flex-col mt-56'>
        <span className='text-carnation text-5xl font-medium leading-14'>Better food for more people</span>
        <span className='text-comet text-xl mt-8 w-100'>For over a decade, we've enabled our customers to discover new tastes, delivered right to their doorstep.</span>
      </div>

      <div className='rounded-4xl bg-white shadow-2xl w-[53%] m-auto py-6 px-7 flex items-center mt-40'>
        <div className='flex items-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5'>
          <div className='flex flex-col'>
            <span className='text-comet text-3xl font-bold'>3,00,000+</span>
            <span className='text-raven text-lg'>restaurants</span>
          </div>
          <img src={images.RESTAURANT_IMG_URL} alt="restaurant-image" className='w-16 h-14' />
        </div>

        <div className='flex items-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5'>
          <div className='flex flex-col'>
            <span className='text-comet text-3xl font-bold'>800+</span>
            <span className='text-raven text-lg'>cities</span>
          </div>
          <img src={images.CITIES_IMG_URL} alt="cities-image" className='w-9 h-12' />
        </div>

        <div className='flex items-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5'>
          <div className='flex flex-col'>
            <span className='text-comet text-3xl font-bold'>3 billion+</span>
            <span className='text-raven text-lg'>orders delivered</span>
          </div>
          <img src={images.ORDER_DELIVERED_IMG_URL} alt="orders-image" className='w-16 h-14' />
        </div>
      </div>

    </div>
  )
}

export default OrderSection
