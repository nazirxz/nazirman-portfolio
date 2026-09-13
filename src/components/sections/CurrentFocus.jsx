import React from 'react'

const KEYWORDS = [
  'AGENTIC AI',
  'MULTI-AGENT SYSTEMS',
  'LLM INFRASTRUCTURE',
  'VLLM',
  'RAG',
  'MCP',
  'OPENSHIFT AI',
  'MULTIMODAL AI',
  'AI OBSERVABILITY'
]

const CurrentFocus = () => {
  return (
    <section className="py-24 overflow-hidden border-t border-black/[0.08] select-none">
      {/* Small Section Label */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <span className="text-xs font-mono tracking-widest text-[#2563EB] uppercase block font-semibold">
          RESEARCH & EVOLUTION
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#09090B] mt-1">
          Currently Exploring
        </h3>
      </div>

      {/* Infinite Horizontal Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right subtle edge gradients */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-8">
          {[...KEYWORDS, ...KEYWORDS].map((kw, idx) => (
            <div key={idx} className="flex items-center space-x-8 shrink-0">
              <span className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-stroke transition-all cursor-default">
                {kw}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentFocus
