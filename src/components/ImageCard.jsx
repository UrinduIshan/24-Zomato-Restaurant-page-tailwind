import React from 'react'

const ImageCard = ({imageUrl, title, secondaryTitle}) => {
  return (
    <div className='flex items-center justify-center gap-5'>
      <img src={imageUrl} alt={title} className='w-[4.6rem]' />
      <div className='flex flex-col'>
        <span className='text-2xl'>{title}</span>
        <span className='text-xl bg-linear-to-r from-[#8c6115] via-[#E9C789] to-[#996F25] bg-clip-text text-center text-transparent'>{secondaryTitle}</span>
      </div>
    </div>
  )
}

export default ImageCard
