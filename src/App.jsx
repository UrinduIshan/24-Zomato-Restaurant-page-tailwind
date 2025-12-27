import React from 'react'
import HeroSection from './components/HeroSection'
import OrderSection from './components/OrderSection'
import FeaturesSection from './components/FeaturesSection'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <HeroSection />
      <OrderSection />
      <FeaturesSection />
    </div>
  )
}

export default App
