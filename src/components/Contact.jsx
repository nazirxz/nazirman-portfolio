import React, { useState } from 'react'
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ArrowUpRight,
  Terminal,
  Copy,
  Check,
  Send
} from 'lucide-react'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('npx nazirman')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-400 text-xs font-mono tracking-wider uppercase">
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span>Contact & Inquiries</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Let's Build Something <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">Exceptional</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Open to enterprise consulting, high-impact AI engineering roles, and custom mobile/web architecture development.
        </p>

        {/* Quick CLI Command Box */}
        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={handleCopyCmd}
            className="group inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] transition-colors font-mono text-xs text-slate-300 cursor-pointer"
          >
            <span className="text-sky-400">$</span>
            <span>npx nazirman</span>
            <div className="p-1 rounded bg-white/[0.05] text-slate-400 group-hover:text-white transition-colors ml-1">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </div>
          </button>
        </div>
      </div>

      {/* Main Grid: Direct Channels (5 cols) & Quick Message (7 cols) */}
      <div className="grid lg:grid-cols-12 gap-8 items-start mb-24">
        {/* Left Column: Direct Links (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <a
            href="mailto:nazirman.it@gmail.com"
            className="card-minimal p-5 flex items-center justify-between group block"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 block">Direct Email</span>
                <span className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                  nazirman.it@gmail.com
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </a>

          <a
            href="tel:+6282166543955"
            className="card-minimal p-5 flex items-center justify-between group block"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 block">Phone / WhatsApp</span>
                <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  +62 821-6654-3955
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </a>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <a
              href="https://www.linkedin.com/in/nazirman/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-minimal p-4 flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-semibold text-white group-hover:text-sky-400 transition-colors">
                  LinkedIn
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://github.com/nazirxz"
              target="_blank"
              rel="noopener noreferrer"
              className="card-minimal p-4 flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-slate-300" />
                <span className="text-xs font-semibold text-white group-hover:text-white transition-colors">
                  GitHub
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Column: Quick Dispatch Form (7 cols) */}
        <div className="lg:col-span-7 card-minimal p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>
          <p className="text-xs text-slate-400 mb-6">
            Leave a brief note and I'll respond within 24 hours.
          </p>

          {submitted ? (
            <div className="py-12 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Message Dispatched</h4>
              <p className="text-xs text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name or company"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Project / Scope</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your application, timeline, or objectives..."
                  className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] p-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <span>Dispatch Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Minimalist Footer */}
      <footer className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
          <span>Location: Indonesia (UTC+7) • Global Remote</span>
        </div>

        <div>
          <span>© {new Date().getFullYear()} Nazirman. All architectures reserved.</span>
        </div>
      </footer>
    </section>
  )
}

export default Contact