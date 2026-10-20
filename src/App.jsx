import './index.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import CapabilitiesSection from './components/sections/CapabilitiesSection'
import StudioSection from './components/sections/StudioSection'
import ContactSection from './components/sections/ContactSection'
import { useFadeInOnScroll } from './hooks/useFadeInOnScroll'
import { useLayoutEffect } from 'react'
import { initAnimations } from './animations'

export default function App() {
  useFadeInOnScroll()
  useLayoutEffect(() => {
    initAnimations()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <CapabilitiesSection />
        {/* <WorkSection /> */}
        <StudioSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
