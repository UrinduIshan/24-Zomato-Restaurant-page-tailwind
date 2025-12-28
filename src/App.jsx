import React from 'react'
import HeroSection from './components/HeroSection'
import OrderSection from './components/OrderSection'
import FeaturesSection from './components/FeaturesSection'
import Gold from './components/Gold'
import Download from './components/Download'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <HeroSection />
      <OrderSection />
      <FeaturesSection />
      <Gold />
      <Download />
    </div>
  )
}

export default App
