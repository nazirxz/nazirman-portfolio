import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAFA]/85 backdrop-blur-md border-b border-black/[0.08] py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Nazirman. */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-bold tracking-tight text-[#09090B] hover:text-zinc-700 transition-colors font-sans cursor-pointer"
        >
          Nazirman<span className="text-[#2563EB]">.</span>
        </button>

        {/* Desktop Links & Action */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-black transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Contact
          </button>

          {/* Let's Talk Button */}
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/[0.1] bg-black text-xs font-medium text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-zinc-600 hover:text-black transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white/95 backdrop-blur-xl border-b border-black/[0.08] flex flex-col space-y-4 text-sm font-medium text-zinc-700 shadow-xl">
          <button
            onClick={() => scrollTo('about')}
            className="text-left py-2 hover:text-black transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="text-left py-2 hover:text-black transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="text-left py-2 hover:text-black transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-left py-2 hover:text-black transition-colors cursor-pointer"
          >
            Contact
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-black text-white font-semibold text-xs transition-all cursor-pointer mt-2"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  )
}

export default Navigation
