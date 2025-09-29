import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import {
  Rocket,
  Database,
  Brain,
  Shield,
  Server,
  FileText,
  Zap,
  CheckCircle,
  ExternalLink,
  Github,
  TrendingUp,
  Layers,
  Search,
  ArrowDown,
  ArrowRight,
  Cloud,
  Cpu,
  Lock,
  Users
} from 'lucide-react'

const Projects = () => {
  const techStacks = {
    backend: [
      { name: "FastAPI", color: "bg-green-500" },
      { name: "Uvicorn", color: "bg-blue-500" },
      { name: "REST API", color: "bg-purple-500" },
      { name: "Streaming", color: "bg-pink-500" }
    ],
    ai: [
      { name: "LangChain", color: "bg-yellow-500" },
      { name: "Sentence Transformers", color: "bg-orange-500" },
      { name: "ColPali", color: "bg-red-500" },
      { name: "OpenAI APIs", color: "bg-green-400" },
      { name: "Vector DB", color: "bg-blue-400" }
    ],
    processing: [
      { name: "SharePoint", color: "bg-blue-600" },
      { name: "OCR (SmolDoc)", color: "bg-purple-600" },
      { name: "PDF/PPT/DOC", color: "bg-indigo-500" },
      { name: "Text Chunking", color: "bg-pink-600" }
    ],
    database: [
      { name: "Oracle", color: "bg-red-600" },
      { name: "MSSQL", color: "bg-blue-700" },
      { name: "Milvus", color: "bg-yellow-500" },
      { name: "Chroma DB", color: "bg-green-500" },
      { name: "Redis", color: "bg-red-500" }
    ],
    security: [
      { name: "NTLM", color: "bg-gray-600" },
      { name: "Fernet Encryption", color: "bg-yellow-600" },
      { name: "JWT", color: "bg-green-600" }
    ],
    infrastructure: [
      { name: "Docker", color: "bg-blue-500" },
      { name: "Load Balancer", color: "bg-purple-500" },
      { name: "Multi-GPU (H100)", color: "bg-green-500" },
      { name: "Monitoring", color: "bg-orange-500" }
    ]
  }

  const features = [
    "Multi-site SharePoint Integration (5+ enterprise sites)",
    "Intelligent Semantic Retrieval & Search",
    "Real-time Document Processing (OCR support)",
    "Advanced RAG Implementation",
    "Scalable Architecture with Load Balancing"
  ]

  const businessImpacts = [
    {
      icon: Database,
      title: "Unified Document Access",
      description: "Integration of 5+ SharePoint sites",
      color: "text-neon-blue"
    },
    {
      icon: Zap,
      title: "AI-powered Search",
      description: "Faster & more relevant information",
      color: "text-yellow-400"
    },
    {
      icon: Server,
      title: "Automation",
      description: "Eliminate manual lookup processes",
      color: "text-purple-gradient"
    },
    {
      icon: Brain,
      title: "Knowledge Management",
      description: "Centralized enterprise knowledge base",
      color: "text-pink-gradient"
    }
  ]

  const portfolioValues = [
    "Enterprise-grade AI System (production ready)",
    "Full-stack Development (Backend, AI, DB, DevOps)",
    "Complex Integrations (SharePoint, Oracle/MSSQL, LLM APIs)",
    "Scalable & Modular, future-proof",
    "Modern AI Tech Stack (LangChain, ColPali, GPU orchestration)"
  ]

  return (
    <section id="projects" className="section-padding bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
            Featured Project
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Showcase of enterprise-scale AI system built with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Rocket className="w-10 h-10 text-neon-blue animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                URBuddy LLM
              </h3>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-neon-blue font-semibold">AI-Powered Document Intelligence System</span>
              {" "}for processing and analyzing corporate documents from various SharePoint sources.
              The system is also integrated with Microsoft SQL Server and Oracle databases to build a comprehensive knowledge base.
              Using RAG (Retrieval-Augmented Generation) approach to provide contextual and intelligent
              responses based on enterprise document content and knowledge base.
              <br /><br />
              <span className="text-yellow-400 font-semibold">Note:</span> This is an on-premise enterprise solution and is not publicly available.
            </p>

            <div className="flex space-x-4">
              <motion.button
                className="flex items-center space-x-2 bg-gray-700 text-gray-400 px-6 py-3 rounded-full font-semibold cursor-not-allowed"
                disabled
              >
                <Lock className="w-5 h-5" />
                <span>On-Premise Enterprise Solution</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Project Images Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg"
            >
              <SwiperSlide>
                <div className="card-glow">
                  <img src="/images/snipe_urbuddy.png" alt="URBuddy Main Page" className="rounded-lg shadow-lg" />
                  <p className="text-center text-gray-400 mt-2 text-sm">URBuddy Main Interface</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-glow">
                  <img src="/images/milvus_db.png" alt="Milvus DB Collection" className="rounded-lg shadow-lg" />
                  <p className="text-center text-gray-400 mt-2 text-sm">Vector Collections in Milvus DB</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold gradient-text mb-8 text-center">
            Technology Stack
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStacks).map(([category, technologies], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="card-glow"
              >
                <h5 className="text-lg font-semibold text-neon-blue mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold gradient-text mb-8 text-center">
            Business Impact
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessImpacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow text-center group hover:scale-105 transition-transform duration-300"
              >
                <impact.icon className={`w-10 h-10 ${impact.color} mx-auto mb-4 group-hover:animate-pulse`} />
                <h5 className="text-lg font-semibold text-white mb-2">
                  {impact.title}
                </h5>
                <p className="text-gray-400 text-sm">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold gradient-text mb-8 text-center">
            System Architecture
          </h4>

          {/* Core Architecture Components */}
          <div className="mb-12">
            <h5 className="text-xl font-semibold text-neon-blue mb-6 text-center">
              Core Architecture Components
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-glow bg-neon-blue/10 border-neon-blue/30 text-center group hover:scale-105 transition-all duration-300"
              >
                <Brain className="w-12 h-12 text-neon-blue mx-auto mb-4 group-hover:animate-pulse" />
                <h6 className="text-lg font-semibold text-white mb-2">
                  Core RAG Engine
                </h6>
                <p className="text-gray-400 text-sm">
                  Semantic search & retrieval
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card-glow bg-purple-500/10 border-purple-500/30 text-center group hover:scale-105 transition-all duration-300"
              >
                <FileText className="w-12 h-12 text-purple-gradient mx-auto mb-4 group-hover:animate-pulse" />
                <h6 className="text-lg font-semibold text-white mb-2">
                  Document Proxy Pattern
                </h6>
                <p className="text-gray-400 text-sm">
                  Abstraction for SharePoint access
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card-glow bg-pink-500/10 border-pink-500/30 text-center group hover:scale-105 transition-all duration-300"
              >
                <Layers className="w-12 h-12 text-pink-gradient mx-auto mb-4 group-hover:animate-pulse" />
                <h6 className="text-lg font-semibold text-white mb-2">
                  Component Manager
                </h6>
                <p className="text-gray-400 text-sm">
                  Modular services (scalable & pluggable)
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card-glow bg-yellow-400/10 border-yellow-400/30 text-center group hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:animate-pulse" />
                <h6 className="text-lg font-semibold text-white mb-2">
                  Caching Layer
                </h6>
                <p className="text-gray-400 text-sm">
                  Faster response & lower infra cost
                </p>
              </motion.div>
            </div>
          </div>

          {/* Document Processing & RAG Flow */}
          <div className="mb-12">
            <h5 className="text-xl font-semibold text-purple-gradient mb-6 text-center">
              Document Processing & RAG Flow
            </h5>
            <div className="card-glow bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-4 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Document Ingestion Flow */}
                <div className="space-y-4">
                  <h6 className="text-lg font-semibold text-neon-blue mb-4 text-center">
                    Document Ingestion
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <FileText className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">SharePoint Documents</div>
                    </div>
                    <ArrowDown className="w-4 h-4 text-neon-blue mx-auto" />
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Cpu className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">OCR & Processing</div>
                    </div>
                    <ArrowDown className="w-4 h-4 text-neon-blue mx-auto" />
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Layers className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">Text Chunking</div>
                    </div>
                    <ArrowDown className="w-4 h-4 text-neon-blue mx-auto" />
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Database className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">Vector Database</div>
                    </div>
                  </div>
                </div>

                {/* Query Processing Flow */}
                <div className="space-y-4">
                  <h6 className="text-lg font-semibold text-purple-gradient mb-4 text-center">
                    Query Processing
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Search className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">User Query</div>
                    </div>
                    <ArrowDown className="w-4 h-4 text-purple-gradient mx-auto" />
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Search className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">Semantic Search</div>
                    </div>
                    <ArrowDown className="w-4 h-4 text-purple-gradient mx-auto" />
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Brain className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">RAG Engine</div>
                    </div>
                    <ArrowDown className="w-4 h-4 text-purple-gradient mx-auto" />
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Zap className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">Response Generation</div>
                    </div>
                  </div>
                </div>

                {/* Security & Authentication */}
                <div className="space-y-4">
                  <h6 className="text-lg font-semibold text-yellow-400 mb-4 text-center">
                    Security & Auth
                  </h6>
                  <div className="space-y-3">
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Shield className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">NTLM Auth</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Lock className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">Fernet Encryption</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Server className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">JWT Tokens</div>
                    </div>
                  </div>
                </div>

                {/* Scalability Features */}
                <div className="space-y-4">
                  <h6 className="text-lg font-semibold text-pink-gradient mb-4 text-center">
                    Scalability
                  </h6>
                  <div className="space-y-3">
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Cloud className="w-6 h-6 text-pink-gradient mx-auto mb-2" />
                      <div className="text-sm text-gray-300">Load Balancer</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Cpu className="w-6 h-6 text-pink-gradient mx-auto mb-2" />
                      <div className="text-sm text-gray-300">Multi-GPU H100</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors duration-300">
                      <Zap className="w-6 h-6 text-pink-gradient mx-auto mb-2" />
                      <div className="text-sm text-gray-300">Redis Caching</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Value */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glow bg-gradient-to-r from-gray-800/80 to-gray-700/80"
        >
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-neon-blue mr-3" />
            <h4 className="text-2xl font-bold gradient-text">
              Portfolio Value
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {portfolioValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-neon-blue mr-3 flex-shrink-0" />
                {value}
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  )
}

export default Projects
