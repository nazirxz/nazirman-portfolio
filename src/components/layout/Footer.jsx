import React from 'react'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-black/[0.08] bg-[#FAFAFA] py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-black font-semibold">Nazirman © 2026</span>
          <span className="hidden sm:inline">•</span>
          <span>Application Developer / AI Engineer</span>
          <span className="hidden sm:inline">•</span>
          <span>Indonesia</span>
        </div>

        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-1.5 text-zinc-600 hover:text-black transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
