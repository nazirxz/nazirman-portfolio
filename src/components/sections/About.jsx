import React from 'react'

const About = () => {
  const interests = [
    'Agentic AI',
    'Generative AI',
    'Enterprise AI',
    'LLM Infrastructure',
    'AI Agents',
    'OpenShift AI',
    'Software Architecture'
  ]

  return (
    <section
      id="about"
      className="py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-black/[0.08]"
    >
      <div className="space-y-12 max-w-4xl">
        {/* Section Label */}
        <span className="text-xs font-mono tracking-widest text-[#2563EB] uppercase block font-semibold">
          01 / ABOUT
        </span>

        {/* Editorial Headline */}
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#09090B] leading-[1.08]">
          I build software where<br />
          <span className="text-zinc-500 font-light">AI meets real-world systems.</span>
        </h2>

        {/* Narrative Description */}
        <p className="text-base sm:text-xl text-zinc-700 leading-relaxed font-normal">
          I'm an Application Developer focused on building production-ready applications, AI-powered platforms, agentic systems, and cloud-native solutions.
        </p>

        <p className="text-base sm:text-lg text-zinc-500 leading-relaxed font-normal">
          My work spans software engineering, enterprise AI, mobile development, data intelligence, and infrastructure integration — combining cutting-edge LLM reasoning with deterministic corporate backend architectures.
        </p>

        {/* Highlight Section: Current Interests */}
        <div className="pt-6 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block">
            Current Interests & Focus Areas
          </span>

          <div className="flex flex-wrap gap-2.5">
            {interests.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-white border border-black/[0.08] text-xs sm:text-sm font-mono text-zinc-700 shadow-sm hover:border-[#2563EB]/50 hover:text-black transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
