import React from 'react'
import { motion } from 'framer-motion'
import { Award, Zap, Users, Brain, Shield, Terminal } from 'lucide-react'

const About = () => {
  const stats = [
    {
      value: "2",
      label: "Flagship Production AI Systems",
      sub: "Mobile & Enterprise"
    },
    {
      value: "158+",
      label: "Automated Tests Passed",
      sub: "Unit, Widget & E2E"
    },
    {
      value: "Cross-Platform",
      label: "Mobile & Web Ecosystems",
      sub: "Flutter & Astro"
    },
    {
      value: "Multimodal",
      label: "Vision AI & Enterprise RAG",
      sub: "OpenAI & Milvus"
    }
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-400 text-xs font-mono tracking-wider uppercase">
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span>About • Background & Philosophy</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Engineering with <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">Precision</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Bridging cutting-edge artificial intelligence with production-grade full-stack architecture. Committed to shipping maintainable, zero-compromise digital products.
        </p>
      </div>

      {/* Main Grid: Portrait & Core Pillars */}
      <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
        {/* Left Column: Portrait & Stats (5 cols) */}
        <div className="lg:col-span-5 space-y-8 flex flex-col items-center">
          {/* Portrait Container */}
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0A0E17] p-2 shadow-2xl">
              <img
                src="/images/profile.png"
                alt="Nazirman Portrait"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-minimal p-4 text-center space-y-1"
              >
                <div className="text-lg sm:text-xl font-bold text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium text-slate-300 leading-snug">
                  {stat.label}
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3 Architectural Pillars (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="card-minimal p-6 space-y-2 group">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                Mobile & Consumer AI Engineering
              </h3>
              <span className="text-xs font-mono text-slate-500">Flutter • Vision AI</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Architected and shipped <strong className="text-slate-200">FreshPlate</strong>, a production-grade Flutter & Supabase application utilizing multimodal OpenAI Vision Edge Functions, dynamic portion math engines, and RevenueCat subscription monetization backed by 158+ automated tests.
            </p>
          </div>

          <div className="card-minimal p-6 space-y-2 group">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                Enterprise AI & Machine Learning
              </h3>
              <span className="text-xs font-mono text-slate-500">FastAPI • RAG</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Specialized in building sophisticated enterprise RAG systems (<strong className="text-slate-200">URBuddy LLM</strong>) using LangChain, ColPali, and Milvus vector databases, orchestrated on high-performance multi-GPU environments for low-latency corporate semantic search.
            </p>
          </div>

          <div className="card-minimal p-6 space-y-2 group">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                Cloud Architecture & Zero-Trust Security
              </h3>
              <span className="text-xs font-mono text-slate-500">RLS • DevOps</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Deep expertise in Supabase Row Level Security (RLS), enterprise NTLM/JWT authentication, automated release pipelines (Google Play & Apple TestFlight), and high-performance web frontends with Astro and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Banner */}
      <div className="card-minimal p-8 max-w-4xl mx-auto text-center space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
          // Core Operating Principle
        </span>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic max-w-2xl mx-auto">
          "Software that combines state-of-the-art machine intelligence with rigorous engineering discipline — deterministic data boundaries, comprehensive test coverage, and human-centric interfaces."
        </p>
      </div>
    </section>
  )
}

export default About