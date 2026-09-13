import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import NeuralSphere from '../three/NeuralSphere'

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
        {/* Left Side: Large Editorial Typography (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 text-left z-10"
        >
          {/* Small Label */}
          <div className="inline-flex items-center gap-2.5 text-xs font-mono text-zinc-500 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>Based in Indonesia • Application Developer</span>
          </div>

          {/* Large Hero Headline */}
          <h1
            className="font-heading font-extrabold tracking-tight text-[#09090B] uppercase leading-[0.95]"
            style={{ fontSize: 'clamp(2.75rem, 6.5vw, 6.5rem)' }}
          >
            Building<br />
            Intelligent<br />
            <span className="text-[#2563EB]">Systems.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-zinc-600 max-w-xl font-normal leading-relaxed">
            Application Developer and AI Engineer building production-grade software, agentic AI systems, and enterprise applications.
          </p>

          {/* CTAs with animated arrows */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo('work')}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-zinc-800 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-black/[0.12] bg-white text-sm font-medium text-[#09090B] hover:bg-zinc-50 hover:border-black/[0.25] active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Three.js Neural Sphere Object (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-5 relative flex items-center justify-center pointer-events-auto"
        >
          <NeuralSphere />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
