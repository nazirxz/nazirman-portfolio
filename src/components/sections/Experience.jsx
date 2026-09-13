import React from 'react'

const Experience = () => {
  const experiences = [
    {
      period: '2024 — Present',
      role: 'Application Developer',
      company: 'PT Pertamina Hulu Rokan',
      description: 'Engineering enterprise-grade applications, multi-agent AI systems, and cloud-native AI platforms on Red Hat OpenShift.',
      focus: [
        'Enterprise applications',
        'Agentic AI',
        'Generative AI',
        'OpenShift',
        'Internal AI platforms'
      ]
    },
    {
      period: '2024',
      role: 'IT Upstream Application Intern',
      company: 'PT Pertamina Hulu Rokan',
      description: 'Contributed to upstream application maintenance, internal developer tooling, and enterprise software support.',
      focus: ['Upstream App Architecture', 'Database Integrations', 'Developer Tooling']
    },
    {
      period: '2023',
      role: 'Bachelor of Applied Computer Science',
      company: 'Politeknik Caltex Riau',
      honors: 'Graduated Cum Laude',
      description: 'Focused on Software Engineering, Computer Vision, Distributed Systems, and Database Management.',
      focus: ['Cum Laude Graduate', 'Computer Vision & AI', 'Software Engineering']
    }
  ]

  return (
    <section
      id="experience"
      className="py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-black/[0.08]"
    >
      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#2563EB] uppercase block font-semibold">
            04 / EXPERIENCE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#09090B]">
            Career & Education
          </h2>
        </div>

        {/* Minimalist Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-black/[0.12] space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#2563EB] ring-4 ring-[#FAFAFA]" />

              <div className="space-y-3">
                {/* Period */}
                <span className="text-xs font-mono text-zinc-400 block">
                  {exp.period}
                </span>

                {/* Role & Company */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-zinc-600 mt-0.5">
                    <span>{exp.company}</span>
                    {exp.honors && (
                      <span className="text-xs font-mono text-[#2563EB] px-2 py-0.5 rounded bg-blue-50 border border-blue-200 font-semibold">
                        {exp.honors}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Focus List */}
                {exp.focus && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.focus.map((f, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs font-mono text-zinc-600 px-2.5 py-1 rounded bg-white border border-black/[0.08] shadow-xs"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
