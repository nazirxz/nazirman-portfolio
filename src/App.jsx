import React from 'react'
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import SelectedWork from './components/sections/SelectedWork'
import Expertise from './components/sections/Expertise'
import AiNetworkSection from './components/sections/AiNetworkSection'
import Experience from './components/sections/Experience'
import CurrentFocus from './components/sections/CurrentFocus'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] selection:bg-blue-600/15 selection:text-blue-700 relative overflow-x-hidden font-sans">
      {/* Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Blur Navigation */}
      <Navigation />

      {/* Main Single-Page Experience */}
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Expertise />
        <AiNetworkSection />
        <Experience />
        <CurrentFocus />
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  )
}

export default App
