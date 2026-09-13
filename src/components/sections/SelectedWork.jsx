import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import ProjectModal from '../ui/ProjectModal'

const SelectedWork = () => {
  const [activeModalProject, setActiveModalProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-black/[0.08]"
    >
      {/* Section Header */}
      <div className="mb-20 space-y-4">
        <span className="text-xs font-mono tracking-widest text-[#2563EB] uppercase block font-semibold">
          02 / SELECTED WORK
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#09090B]">
          Production Systems & Case Studies
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
          Cross-platform mobile applications, modern web marketing platforms, and enterprise agentic document intelligence systems.
        </p>
      </div>

      {/* Editorial Project Rows */}
      <div className="divide-y divide-black/[0.08] border-b border-black/[0.08]">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              data-cursor="view"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setActiveModalProject(project)}
              className="group relative py-10 sm:py-14 transition-all duration-300 cursor-pointer"
            >
              <div className="grid lg:grid-cols-12 gap-6 items-baseline">
                {/* Number & Name (5 cols) */}
                <div className="lg:col-span-5 flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-[#2563EB] transition-colors font-semibold">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#09090B] group-hover:translate-x-1 transition-transform">
                      {project.name}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500 mt-1 block">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Description & Tech Chips (6 cols) */}
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white border border-black/[0.08] text-[11px] font-mono text-zinc-600 shadow-xs group-hover:border-black/[0.2] group-hover:text-black transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow & Year (1 col) */}
                <div className="lg:col-span-1 flex items-center justify-between lg:justify-end gap-2 text-zinc-400 group-hover:text-black transition-colors">
                  <span className="text-xs font-mono lg:hidden">{project.year}</span>
                  <div className="p-2 rounded-full border border-black/[0.08] group-hover:border-black group-hover:bg-black group-hover:text-white transition-all shadow-xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Floating Preview Image following Cursor (Desktop Only) */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x + 24,
              y: mousePos.y - 120
            }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="pointer-events-none fixed top-0 left-0 z-40 hidden lg:block w-[320px] h-[200px] rounded-xl overflow-hidden shadow-2xl border border-black/[0.12] bg-white"
          >
            <img
              src={hoveredProject.image}
              alt={hoveredProject.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-xs font-mono font-semibold text-white">
                {hoveredProject.name} • Case Study
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  )
}

export default SelectedWork
