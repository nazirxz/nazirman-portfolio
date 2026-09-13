import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Code, Mail, Layers, ArrowUpRight } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'hero', label: 'Overview', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Systems', icon: Briefcase },
    { id: 'chat-doc', label: 'Doc AI', icon: Layers },
    { id: 'techstack', label: 'Stack', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = navItems.map(item => item.id)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop - 120
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId === 'hero' ? 'root' : sectionId)
    if (element) {
      const offsetTop = sectionId === 'hero' ? 0 : element.offsetTop - 90
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2.5 rounded-full bg-[#080B11]/85 border border-white/[0.08] backdrop-blur-2xl shadow-2xl shadow-black/60 w-full max-w-4xl"
      >
        {/* Brand / Monogram */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 text-left group cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-500 to-teal-400 p-[1px] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#080B11] flex items-center justify-center font-bold text-xs text-white group-hover:text-sky-400 transition-colors">
              N
            </div>
          </div>
          <span className="font-semibold text-sm tracking-tight text-white group-hover:text-sky-400 transition-colors hidden xs:inline">
            Nazirman
          </span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12] -z-10 shadow-inner"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>

        {/* Right CTA / Connect button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-medium text-slate-200 hover:bg-white hover:text-slate-950 hover:border-white transition-all duration-200 cursor-pointer"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-2xl bg-[#090D15]/95 border border-white/[0.1] backdrop-blur-2xl shadow-2xl p-3 flex flex-col gap-1 max-w-sm mx-auto"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-sky-500/10 text-sky-400 font-semibold'
                    : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4 text-slate-400" />
                <span>{item.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation
