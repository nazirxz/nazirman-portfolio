import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Terminal, ShieldCheck } from 'lucide-react'
import HeroScene3D from './three/HeroScene3D'

const Hero = () => {
  const [displayedRole, setDisplayedRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const fullRole = "AI Systems Engineer • Cross-Platform Mobile & Web Architect"

  useEffect(() => {
    if (roleIndex < fullRole.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedRole(prev => prev + fullRole[roleIndex])
        setRoleIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timeoutId)
    }
  }, [roleIndex, fullRole])

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Minimalist Editorial Content (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] backdrop-blur-md text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for AI Engineering & Mobile Architectures</span>
          </div>

          {/* Main Titles */}
          <div className="space-y-3">
            <h2 className="text-sm uppercase tracking-[0.25em] text-slate-400 font-semibold font-mono">
              Nazirman • Portfolio
            </h2>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Architecting <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">Intelligent</span> Systems.
            </h1>
            <div className="text-base sm:text-xl font-mono text-slate-300 pt-1 flex items-center gap-1">
              <Terminal className="w-4 h-4 text-sky-400 inline-block mr-1" />
              <span>{displayedRole}</span>
              <span className="inline-block w-2 h-4 bg-sky-400 animate-pulse ml-0.5" />
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal">
            Specializing in high-performance production AI applications — from multimodal computer vision mobile apps with real-time telemetry to enterprise-grade on-premise RAG systems and cloud infrastructure.
          </p>

          {/* Minimalist Tech Highlights */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Multimodal Vision AI",
              "Flutter & Dart 3.12+",
              "Enterprise RAG & Milvus",
              "Supabase Edge Functions",
              "FastAPI & LangChain",
              "PostgreSQL & RLS"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300 hover:border-sky-400/40 hover:text-white transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 active:scale-95 transition-all shadow-lg shadow-white/10"
            >
              <span>Explore Featured Systems</span>
              <ArrowUpRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.03] text-sm font-medium text-slate-300 hover:text-white hover:border-white/[0.25] hover:bg-white/[0.06] active:scale-95 transition-all"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Three.js Interactive 3D Scene (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Subtle Glow Ring behind 3D Canvas */}
          <div className="absolute w-72 h-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none -z-10" />

          {/* 3D Canvas */}
          <HeroScene3D />

          {/* Interactive Hint */}
          <div className="absolute bottom-2 right-4 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 pointer-events-none bg-[#07090E]/80 px-2.5 py-1 rounded-full border border-white/[0.06] backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
            <span>Interactive 3D Core • Drag / Move Cursor</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero