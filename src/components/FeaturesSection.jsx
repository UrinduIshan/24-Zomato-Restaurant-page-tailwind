import React from 'react'
import * as images from '../utils/app.constants'
import FeatureCard from './FeatureCard'

const FeaturesSection = () => {
  return (
    <div className='w-full h-120 bg-linear-to-b from-chablis to-white'>
      <div className='relative text-center flex flex-col items-center justify-center py-28'>
        <span className='text-carnation text-[48px] font-bold leading-tight'>What's waiting for you <br /> on the app?</span>
        <span className='text-xl text-comet font-extralight mt-5'>Our app is packed with features that <br /> enable you to experience food <br /> delivery like never before</span>

        <div className='relative mt-16'>
            <img src={images.PHONE_IMG_URL} alt="phone-image" className='w-72 mt-6' />
            <div className='py-3.5 pb-2 absolute top-34 left-18 shadow-2xl bg-white rounded-3xl flex flex-col items-center justify-center border border-athens-gray'>
                <img src={images.CALENDAR_IMG_URL} alt="calendar-image" className='w-36 h-22.5' />
                <span>Schedule <br /> your order</span>
            </div>
        </div>

        <FeatureCard imgUrl={images.HEALTHY_IMG_URL} title="Healthy" className='bottom-72 left-74' />
        <FeatureCard imgUrl={images.VEG_MODE_IMG_URL} title="Veg Mode" className='bottom-68 left-108' />
        <FeatureCard imgUrl={images.PARTY_IMG_URL} title="Plan a Party" className='bottom-37 left-70' />
        <FeatureCard imgUrl={images.GIFT_CARDS_IMG_URL} title="Gift Cards" className='bottom-33 left-103' />
        <FeatureCard imgUrl={images.GOURMET_IMG_URL} title="Gourmet" className='bottom-68 right-108' />
        <FeatureCard imgUrl={images.OFFERS_IMG_URL} title="Offers" className='bottom-72 right-74' />
        <FeatureCard imgUrl={images.FOOD_ON_TRAIN_IMG_URL} title="Food on Train" className='bottom-33 right-103' />
        <FeatureCard imgUrl={images.COLLECTIONS_IMG_URL} title="Collections" className='bottom-37 right-70' />

      </div>
    </div>
  )
}

export default FeaturesSection
