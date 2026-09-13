import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0)

  useEffect(() => {
    setActiveImageIdx(0)
  }, [project])

  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const hasGallery = project.gallery && project.gallery.length > 0
  const activeImage = hasGallery ? project.gallery[activeImageIdx]?.image : project.image
  const activeImageTitle = hasGallery ? project.gallery[activeImageIdx]?.title : project.name

  const handlePrevImage = (e) => {
    e.stopPropagation()
    if (!hasGallery) return
    setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : project.gallery.length - 1))
  }

  const handleNextImage = (e) => {
    e.stopPropagation()
    if (!hasGallery) return
    setActiveImageIdx((prev) => (prev < project.gallery.length - 1 ? prev + 1 : 0))
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/45 backdrop-blur-md"
        />

        {/* Modal Window (Apple Light Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-black/[0.08] p-6 sm:p-8 shadow-2xl space-y-6"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#2563EB] font-semibold">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono text-zinc-300">•</span>
              <span className="text-xs font-mono text-zinc-500">{project.category}</span>
            </div>

            <div className="flex items-center gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-[#2563EB] hover:text-white text-xs font-mono text-zinc-700 transition-colors cursor-pointer"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-full text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Title & Overview */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B]">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Project Preview Media & Gallery */}
          {activeImage && (
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-zinc-950/5 border border-black/[0.08] flex items-center justify-center shadow-inner group">
                <img
                  src={activeImage}
                  alt={activeImageTitle}
                  className="w-full h-full object-contain p-2"
                />
                {/* Screenshot caption */}
                {activeImageTitle && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-left">
                    <span className="text-xs font-mono text-white font-medium">
                      {activeImageTitle}
                    </span>
                  </div>
                )}

                {/* Nav Arrows if Gallery */}
                {hasGallery && project.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      aria-label="Previous screenshot"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all cursor-pointer shadow-md"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      aria-label="Next screenshot"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all cursor-pointer shadow-md"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Gallery Thumbnails / Quick Selectors */}
              {hasGallery && project.gallery.length > 1 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.gallery.map((g, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                        idx === activeImageIdx
                          ? 'bg-black text-white font-semibold shadow-xs'
                          : 'bg-zinc-100 border border-zinc-200 text-zinc-600 hover:bg-zinc-200'
                      }`}
                    >
                      {g.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Quantitative Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-black/[0.06] space-y-1">
                  <span className="text-[11px] font-mono text-zinc-500 block">{m.label}</span>
                  <span className="text-sm font-bold text-[#09090B] block">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Architecture & Implementation Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Technologies & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ProjectModal
