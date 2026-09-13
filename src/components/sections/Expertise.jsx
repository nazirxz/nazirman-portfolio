import React from 'react'
import { expertiseCategories } from '../../data/expertise'

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-black/[0.08]"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column (5 cols): What I work with. */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#2563EB] uppercase block font-semibold">
            03 / EXPERTISE
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#09090B] leading-tight">
            What I<br />
            work with.
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 max-w-sm leading-relaxed font-normal pt-2">
            Disciplines and tools mastered across high-scale enterprise applications, agentic platforms, and cloud infrastructure.
          </p>
        </div>

        {/* Right Column (7 cols): Clean Typographic List */}
        <div className="lg:col-span-7 divide-y divide-black/[0.08]">
          {expertiseCategories.map((group, idx) => (
            <div key={idx} className="py-6 first:pt-0 last:pb-0 space-y-3">
              <h3 className="text-base font-mono font-bold text-[#09090B] tracking-wide">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base text-zinc-600 font-normal">
                {group.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="hover:text-black transition-colors cursor-default"
                  >
                    {item}
                    {itemIdx < group.items.length - 1 && (
                      <span className="text-zinc-300 ml-4 font-mono select-none">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
