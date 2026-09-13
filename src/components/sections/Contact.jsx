import React from 'react'
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const contactLinks = [
    {
      label: 'Email Me',
      href: 'mailto:nazirman.it@gmail.com',
      icon: Mail,
      target: '_self'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nazirman/',
      icon: Linkedin,
      target: '_blank'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/nazirxz',
      icon: Github,
      target: '_blank'
    }
  ]

  return (
    <section
      id="contact"
      className="py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-black/[0.08]"
    >
      <div className="max-w-4xl space-y-10">
        {/* Small Label */}
        <span className="text-xs font-mono tracking-widest text-[#2563EB] uppercase block font-semibold">
          05 / CONTACT
        </span>

        {/* Large Typography Headline */}
        <h2
          className="font-heading font-extrabold uppercase tracking-tight text-[#09090B] leading-[0.95]"
          style={{ fontSize: 'clamp(2.5rem, 6.5vw, 6rem)' }}
        >
          Let's Build<br />
          Something<br />
          <span className="text-[#2563EB]">Intelligent.</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-xl">
          Interested in AI systems, software engineering, or building meaningful digital products? Let's connect.
        </p>

        {/* CTA Direct Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          {contactLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.target}
              rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-black/[0.12] bg-white text-sm font-medium text-[#09090B] hover:bg-black hover:text-white hover:border-black transition-all shadow-xs cursor-pointer"
            >
              <item.icon className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              <span>{item.label}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
