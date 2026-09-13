import React from 'react'
import {
  Code,
  Database,
  Brain,
  Shield,
  Server,
  Cloud,
  Terminal
} from 'lucide-react'

const TechStack = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      tag: "CORE_AI",
      skills: [
        "Multimodal Vision AI (OpenAI)",
        "LangChain & RAG Orchestration",
        "ColPali & Document AI",
        "Milvus Vector Database",
        "Transformers & Embeddings",
        "Python (PyTorch / Scikit)"
      ]
    },
    {
      title: "Mobile & Frontend Engineering",
      icon: Code,
      tag: "CLIENT",
      skills: [
        "Flutter 3.44+ & Dart 3.12+",
        "React.js 18 & Next.js",
        "React Native",
        "Astro 4 & Tailwind CSS",
        "TypeScript",
        "State Management (Bloc / Provider)"
      ]
    },
    {
      title: "Backend & Cloud Services",
      icon: Server,
      tag: "RUNTIME",
      skills: [
        "Supabase Edge Functions (Deno)",
        "FastAPI (Python 3.10+)",
        "Node.js & Express",
        "RevenueCat In-App Billing",
        "REST & Streaming WebSockets",
        "Microservices Architecture"
      ]
    },
    {
      title: "Database & Storage Systems",
      icon: Database,
      tag: "DATA_LAYER",
      skills: [
        "PostgreSQL (Supabase)",
        "Row Level Security (RLS)",
        "Oracle DB (cx_Oracle)",
        "Microsoft SQL Server",
        "Redis Distributed Caching",
        "Vector Indexing & Optimization"
      ]
    },
    {
      title: "Cloud Infrastructure & DevOps",
      icon: Cloud,
      tag: "INFRA",
      skills: [
        "Docker & Containerization",
        "Multi-GPU (NVIDIA H100) Clusters",
        "Google Cloud Platform (GCP)",
        "Vercel & Cloudflare Edge",
        "CI/CD Pipeline Automation",
        "Linux & Nginx Reverse Proxy"
      ]
    },
    {
      title: "Security & Enterprise Governance",
      icon: Shield,
      tag: "GOVERNANCE",
      skills: [
        "Zero-Trust Architecture",
        "Row Level Security (RLS)",
        "NTLM Corporate Single Sign-On",
        "JWT & OAuth 2.0 Auth",
        "Fernet Encryption",
        "Automated Security Auditing"
      ]
    }
  ]

  return (
    <section id="techstack" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-400 text-xs font-mono tracking-wider uppercase">
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span>Technology & Architecture Matrix</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Technical <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">Capabilities</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Curated disciplines and technologies applied across consumer mobile products, high-throughput cloud infrastructure, and enterprise AI engines.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="card-minimal p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:text-white transition-all">
                  <category.icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.05]">
                  {category.tag}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
                {category.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack