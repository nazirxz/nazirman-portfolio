import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import LlmAssistantDemo from './components/LlmAssistantDemo'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <LlmAssistantDemo />
      <TechStack />
      <Contact />
    </div>
  )
}

export default App
