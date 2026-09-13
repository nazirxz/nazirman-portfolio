import React, { useState } from 'react'
import NetworkScene from '../three/NetworkScene'

const AiNetworkSection = () => {
  const [hoveredNode, setHoveredNode] = useState(null)

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-black/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div className="space-y-2">
          <span className="text-xs font-mono tracking-widest text-[#2563EB] uppercase block font-semibold">
            VISUAL ARCHITECTURE // THREE.JS
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-[#09090B]">
            AI System Network
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-normal">
            Abstract constellation model representing orchestrated agents, LLM serving, and enterprise data backends.
          </p>
        </div>

        {/* Dynamic HUD Node Inspection Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/[0.1] bg-white text-xs font-mono text-zinc-700 shadow-xs">
          <span className={`w-2 h-2 rounded-full ${hoveredNode ? 'bg-[#2563EB] animate-ping' : 'bg-zinc-400'}`} />
          {hoveredNode ? (
            <span>
              <strong className="text-black">{hoveredNode.name}:</strong> {hoveredNode.role}
            </span>
          ) : (
            <span className="text-zinc-500">Hover over any node to inspect role</span>
          )}
        </div>
      </div>

      {/* Three.js Interactive Canvas Card */}
      <div className="relative w-full rounded-2xl bg-white border border-black/[0.08] overflow-hidden p-2 shadow-sm">
        <NetworkScene onHoverNode={setHoveredNode} />

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-400 pointer-events-none px-2">
          <span>7 Interconnected Neural Nodes</span>
          <span className="hidden sm:inline">WebGL Dynamic Raycast</span>
        </div>
      </div>
    </section>
  )
}

export default AiNetworkSection
