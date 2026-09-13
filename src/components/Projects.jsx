import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
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
  Layers,
  Lock,
  Smartphone,
  Globe,
  Camera,
  DollarSign,
  ShieldCheck,
  Sparkles,
  CreditCard,
  Scale,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Cpu
} from 'lucide-react'

const Projects = () => {
  const [activeProject, setActiveProject] = useState('freshplate')
  const [mediaView, setMediaView] = useState('mobile')
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0)
  const [currentWebIndex, setCurrentWebIndex] = useState(0)

  // 3D Tilt State for interactive preview
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleDeviceMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    setTilt({ rotateX, rotateY })
  }

  const handleDeviceMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  // FreshPlate Mobile Screens
  const mobileScreens = [
    {
      id: 'dashboard',
      title: 'Daily Health & Budget Dashboard',
      subtitle: 'Real-time telemetry for nutrition and spending',
      badge: 'Core Dashboard',
      shortLabel: 'Dashboard',
      image: '/images/freshplate/dashboard_screen.png',
      desc: 'Instant visual overview of daily calorie allowance, protein target progress, and daily food budget telemetry so users make fast, conscious lifestyle choices.'
    },
    {
      id: 'scanner',
      title: 'AI Meal Photo Scanner',
      subtitle: '3-second multimodal visual intelligence',
      badge: 'OpenAI Vision',
      shortLabel: 'AI Scanner',
      image: '/images/freshplate/meal_analysis.png',
      desc: 'Point-and-shoot camera identification. Powered by OpenAI Vision Edge Functions, it analyzes complex meal plates, identifies ingredients, macros, and calculates estimated meal costs.'
    },
    {
      id: 'impact',
      title: 'Meal Impact Telemetry',
      subtitle: 'Nutritional and financial feedback loop',
      badge: 'Telemetry Engine',
      shortLabel: 'Meal Impact',
      image: '/images/freshplate/meal_impact.png',
      desc: 'Correlates meal nutritional value against daily budget constraints. Displays clear visual metrics on how every plate impacts weekly goals.'
    },
    {
      id: 'weightloss',
      title: 'Weight Loss Goal Mode',
      subtitle: 'Caloric deficit pacing & moderation',
      badge: 'Goal Algorithm',
      shortLabel: 'Weight Loss',
      image: '/images/freshplate/weightloss_dashboard_screen.png',
      desc: 'Specialized dashboard calculation tailored for sustainable deficit pacing, portion moderation, and home-cooking financial savings tracking.'
    },
    {
      id: 'musclegain',
      title: 'Muscle Gain Goal Mode',
      subtitle: 'Hypertrophy protein prioritization',
      badge: 'Goal Algorithm',
      shortLabel: 'Muscle Gain',
      image: '/images/freshplate/muslce_gaindashboard_screen.png',
      desc: 'Optimized telemetry focusing on high-protein intake thresholds, surplus budgeting, and cost-effective nutrient density recommendations.'
    },
    {
      id: 'maintenance',
      title: 'Maintenance Balance Mode',
      subtitle: 'Lifestyle balance & long-term habits',
      badge: 'Goal Algorithm',
      shortLabel: 'Maintenance',
      image: '/images/freshplate/maintenance_dashboard.png',
      desc: 'Maintains caloric equilibrium while highlighting grocery vs. dining-out cost trends to foster lifelong sustainable habits.'
    },
    {
      id: 'onboarding',
      title: 'Biometric Smart Onboarding',
      subtitle: 'Personalized metabolic baseline setup',
      badge: 'Biometrics',
      shortLabel: 'Onboarding',
      image: '/images/freshplate/onboarding_screen.png',
      desc: 'Interactive multi-step onboarding computing personalized Basal Metabolic Rate (BMR), activity multiplier, and baseline financial budget goals.'
    }
  ]

  // FreshPlate Web Landing Page captures
  const webScreens = [
    {
      id: 'landing-hero',
      title: 'Freshaverstech Hero & VIP Waitlist',
      subtitle: 'High-converting modern landing page',
      image: '/images/freshplate/freshaverstech_landing.png',
      desc: 'High-converting hero section with interactive 3-screen mobile visual showcase and VIP Early Access waitlist lead capture.'
    },
    {
      id: 'landing-showcase',
      title: 'Full Product Architecture & Showcase',
      subtitle: 'Sub-second performance powered by Astro',
      image: '/images/freshplate/freshaverstech_showcase.png',
      desc: 'Comprehensive showcase section presenting feature cards, interactive goal carousels, and responsive telemetry breakdowns.'
    }
  ]

  // Minimalist Tech Stacks
  const freshPlateTechStacks = {
    mobileClient: ['Flutter 3.44+', 'Dart 3.12+', 'Provider / Bloc', 'Material 3', 'Cupertino', 'Offline Cache'],
    aiAndEdge: ['OpenAI Vision API', 'Supabase Edge Functions', 'Deno / TypeScript', 'Multimodal Prompting', 'JSON Schema Guard'],
    databaseAndSecurity: ['Supabase PostgreSQL', 'Row Level Security (RLS)', 'Storage Buckets', 'JWT Session Auth'],
    monetization: ['RevenueCat SDK', 'Apple StoreKit 2', 'Google Play Billing', '3-Tier Subscriptions (VIP/Family)'],
    webPlatform: ['Astro SSG/SSR', 'Tailwind CSS', 'VIP Waitlist Engine', 'Cloudflare CDN'],
    devOpsAndQA: ['158+ Automated Tests', 'Unit & Widget Tests', 'E2E Integration Tests', 'Automated Dual Builds']
  }

  const freshPlateFeatures = [
    {
      icon: Camera,
      title: 'Multimodal AI Vision Scanner',
      description: 'OpenAI Vision Edge Functions identify complex mixed dishes and break down calories, macros, and cost in <3 seconds.',
      tag: 'Computer Vision'
    },
    {
      icon: DollarSign,
      title: 'Real-Time Financial Telemetry',
      description: 'First-of-its-kind telemetry linking nutritional density with meal spending, dining out budgets, and grocery savings.',
      tag: 'Telemetry'
    },
    {
      icon: Scale,
      title: 'Dynamic Portion Engine',
      description: '100% master data lock with real-time recalculation of macro ratios and portion scaling without data drift.',
      tag: 'Algorithmic Engine'
    },
    {
      icon: CreditCard,
      title: '3-Tier Monetization Architecture',
      description: 'Production RevenueCat integration supporting Free, Individual, and Family 5-Seat tiers with invite token gateways.',
      tag: 'StoreKit & Billing'
    },
    {
      icon: ShieldCheck,
      title: 'Supabase RLS & Encrypted Data',
      description: 'Granular Row Level Security policies guarantee strictly isolated, encrypted user health and financial records.',
      tag: 'Zero-Trust Security'
    },
    {
      icon: CheckCircle,
      title: '158+ Automated Tests & Store Ready',
      description: 'Zero linter errors, comprehensive test coverage (unit, widget, E2E), and automated Google Play & iOS build pipelines.',
      tag: 'Continuous Delivery'
    }
  ]

  const urBuddyTechStacks = {
    backendAndAPI: ['FastAPI (Python 3.10+)', 'Uvicorn ASGI', 'RESTful API', 'Streaming Responses'],
    aiAndRAG: ['LangChain Framework', 'Sentence Transformers', 'ColPali Retrieval', 'OpenAI / Anthropic APIs', 'Milvus Vector DB'],
    documentProcessing: ['SharePoint Multi-Site (5+)', 'OCR Engine (SmolDoc)', 'PDF/PPT/DOC Extractors', 'Intelligent Text Chunking'],
    databaseAndCaching: ['Oracle Database (cx_Oracle)', 'Microsoft SQL Server', 'Milvus Collections', 'Redis Caching'],
    securityAndAuth: ['NTLM Corporate Auth', 'Fernet Encryption', 'JWT Tokens', 'Credential Vault'],
    infrastructure: ['Docker & Docker Compose', 'Load Balancer', 'Multi-GPU Cluster (H100)', 'Enterprise Telemetry']
  }

  const urBuddyBusinessImpacts = [
    {
      icon: Database,
      title: 'Unified Document Access',
      description: 'Centralized integration across 5+ disparate enterprise SharePoint sites.'
    },
    {
      icon: Zap,
      title: 'Contextual AI Retrieval',
      description: 'Sub-second semantic search replacing tedious manual document lookups.'
    },
    {
      icon: Server,
      title: 'Automated Ingestion Pipeline',
      description: 'Eliminates repetitive multi-format OCR and parsing operations.'
    },
    {
      icon: Brain,
      title: 'Enterprise Knowledge Hub',
      description: 'Auditable, RAG-grounded answers with zero external data exposure.'
    }
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-400 text-xs font-mono tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Production Engineering Portfolio</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Featured <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">Architectures</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Production-grade AI systems, cross-platform mobile products, and enterprise knowledge intelligence engines.
        </p>

        {/* Minimalist Segmented Tab Switcher */}
        <div className="pt-4 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-[#0A0E17] border border-white/[0.08] backdrop-blur-xl shadow-xl">
            <button
              onClick={() => setActiveProject('freshplate')}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeProject === 'freshplate'
                  ? 'bg-white text-slate-950 font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeProject === 'freshplate' ? 'bg-emerald-500' : 'bg-slate-600'}`} />
              <span>FreshPlate (AI Health & Finance)</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 font-bold border border-emerald-500/30">
                Flagship
              </span>
            </button>

            <button
              onClick={() => setActiveProject('urbuddy')}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeProject === 'urbuddy'
                  ? 'bg-white text-slate-950 font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeProject === 'urbuddy' ? 'bg-sky-500' : 'bg-slate-600'}`} />
              <span>URBuddy LLM (Document AI)</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-700 font-bold border border-sky-500/30">
                Enterprise
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Project Content View */}
      <AnimatePresence mode="wait">
        {activeProject === 'freshplate' ? (
          <motion.div
            key="freshplate"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-20"
          >
            {/* Top Showcase: 2-Column Minimalist Layout */}
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Information & Controls (5 Cols) */}
              <div className="lg:col-span-5 space-y-6 text-left">
                {/* Monogram Badge & Title */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        FreshPlate
                      </h3>
                      <p className="text-xs font-mono text-emerald-400 font-medium">
                        AI Health & Real-Time Financial Telemetry
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  A complete ecosystem uniting a cross-platform mobile application (<strong className="text-slate-200">Flutter & Supabase</strong>) and high-performance marketing platform (<strong className="text-slate-200">Freshaverstech</strong>). Connects multimodal computer vision food recognition with real-time food budget telemetry.
                </p>

                {/* Signal Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    158+ Automated Tests Passed
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-sky-400" />
                    &lt;3s Multimodal Vision AI
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                    Supabase PostgreSQL & RLS
                  </span>
                </div>

                {/* Viewport Mode Switcher */}
                <div className="pt-3 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                    Interactive Viewport
                  </span>
                  <div className="grid grid-cols-2 gap-2 max-w-sm">
                    <button
                      type="button"
                      onClick={() => setMediaView('mobile')}
                      className={`flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                        mediaView === 'mobile'
                          ? 'bg-white text-slate-950 font-semibold border-white shadow-md'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Mobile App</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMediaView('web')}
                      className={`flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                        mediaView === 'web'
                          ? 'bg-white text-slate-950 font-semibold border-white shadow-md'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      <Globe className="w-4 h-4" />
                      <span>Web Platform</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Tilt Viewport (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center">
                {mediaView === 'mobile' ? (
                  <div className="w-full flex flex-col items-center">
                    {/* 3D Interactive Tilt Container */}
                    <div
                      onMouseMove={handleDeviceMouseMove}
                      onMouseLeave={handleDeviceMouseLeave}
                      style={{
                        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                        transition: 'transform 0.15s ease-out',
                        transformStyle: 'preserve-3d'
                      }}
                      className="relative w-full max-w-[280px] sm:max-w-[310px] flex items-center justify-center cursor-pointer"
                    >
                      {/* Ambient Emerald Backdrop Glow */}
                      <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full transform scale-90 -z-10 pointer-events-none" />

                      {/* Left Navigation Arrow */}
                      <button
                        type="button"
                        aria-label="Previous screen"
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentMobileIndex((prev) => (prev - 1 + mobileScreens.length) % mobileScreens.length)
                        }}
                        className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#080B11]/90 border border-white/[0.1] text-slate-300 shadow-xl flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all cursor-pointer backdrop-blur-md"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      {/* Direct Clean 3D Phone Image */}
                      <div className="relative w-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={mobileScreens[currentMobileIndex].id}
                            src={mobileScreens[currentMobileIndex].image}
                            alt={mobileScreens[currentMobileIndex].title}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.04 }}
                            transition={{ duration: 0.25 }}
                            className="w-full h-auto max-h-[460px] sm:max-h-[490px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)]"
                          />
                        </AnimatePresence>
                      </div>

                      {/* Right Navigation Arrow */}
                      <button
                        type="button"
                        aria-label="Next screen"
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentMobileIndex((prev) => (prev + 1) % mobileScreens.length)
                        }}
                        className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#080B11]/90 border border-white/[0.1] text-slate-300 shadow-xl flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all cursor-pointer backdrop-blur-md"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Minimalist Screen Info & Pill Selectors */}
                    <div className="mt-4 text-center max-w-md space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400">
                        <span className="text-emerald-400 font-semibold">{mobileScreens[currentMobileIndex].badge}</span>
                        <span>•</span>
                        <span>{currentMobileIndex + 1} / {mobileScreens.length}</span>
                      </div>
                      <h4 className="text-base font-bold text-white">
                        {mobileScreens[currentMobileIndex].title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {mobileScreens[currentMobileIndex].desc}
                      </p>

                      {/* Quick Pill Selectors */}
                      <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                        {mobileScreens.map((screen, idx) => (
                          <button
                            key={screen.id}
                            type="button"
                            onClick={() => setCurrentMobileIndex(idx)}
                            className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                              idx === currentMobileIndex
                                ? 'bg-white text-slate-950 font-semibold shadow-xs'
                                : 'bg-white/[0.03] border border-white/[0.07] text-slate-400 hover:text-white hover:bg-white/[0.08]'
                            }`}
                          >
                            {screen.shortLabel}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                    {/* Sleek Minimalist Browser Frame */}
                    <div
                      onMouseMove={handleDeviceMouseMove}
                      onMouseLeave={handleDeviceMouseLeave}
                      style={{
                        transform: `perspective(1000px) rotateX(${tilt.rotateX * 0.7}deg) rotateY(${tilt.rotateY * 0.7}deg)`,
                        transition: 'transform 0.15s ease-out',
                        transformStyle: 'preserve-3d'
                      }}
                      className="w-full rounded-2xl bg-[#090D15] border border-white/[0.1] shadow-2xl overflow-hidden"
                    >
                      {/* Browser Window Bar */}
                      <div className="flex items-center justify-between px-4 py-3 bg-[#06080E] border-b border-white/[0.08]">
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                        </div>

                        <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-lg bg-white/[0.03] text-xs text-slate-400 border border-white/[0.06] w-2/3 max-w-xs font-mono">
                          <Lock className="w-3 h-3 text-emerald-400" />
                          <span>https://freshaverstech.com</span>
                        </div>

                        <div className="flex items-center space-x-1.5">
                          <button
                            type="button"
                            onClick={() => setCurrentWebIndex(0)}
                            className={`text-[11px] px-2.5 py-1 rounded-md font-mono transition-colors cursor-pointer ${
                              currentWebIndex === 0 ? 'bg-white text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            Hero
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrentWebIndex(1)}
                            className={`text-[11px] px-2.5 py-1 rounded-md font-mono transition-colors cursor-pointer ${
                              currentWebIndex === 1 ? 'bg-white text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            Showcase
                          </button>
                        </div>
                      </div>

                      {/* High-Res Browser Screenshot */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={webScreens[currentWebIndex].id}
                            src={webScreens[currentWebIndex].image}
                            alt={webScreens[currentWebIndex].title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-cover object-top"
                          />
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 6 Core Engineering Innovation Cards */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                  // Core AI & Systems Engineering
                </span>
                <h4 className="text-2xl font-bold tracking-tight text-white">
                  Technical Innovations
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {freshPlateFeatures.map((feat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className="card-minimal p-6 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:text-white transition-all">
                          <feat.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.05]">
                          {feat.tag}
                        </span>
                      </div>
                      <h5 className="text-base font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                        {feat.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* End-to-End System Pipeline */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                  // Data Pipeline & Architecture
                </span>
                <h4 className="text-2xl font-bold tracking-tight text-white">
                  End-to-End System Lifecycle
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: '01', title: 'Flutter Client', desc: 'Camera capture, dynamic portion adjusters, and biometric goal computation on iOS & Android.' },
                  { step: '02', title: 'OpenAI Vision Edge', desc: 'Supabase Edge Functions parse plate components, portion weight, macros & micro telemetry.' },
                  { step: '03', title: 'Dynamic Engine & RLS', desc: 'Supabase PostgreSQL with RLS guarantees zero data leakage & 100% master data locked portion scaling.' },
                  { step: '04', title: 'RevenueCat & Stores', desc: '3-tier subscriptions, family seats, and automated App Store & Google Play release pipelines.' }
                ].map((item, idx) => (
                  <div key={idx} className="card-minimal p-5 relative">
                    <span className="text-xs font-mono font-bold text-sky-400 mb-2 block">
                      STAGE_{item.step}
                    </span>
                    <h5 className="text-sm font-bold text-white mb-1.5">{item.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <h4 className="text-xl font-bold tracking-tight text-white">
                  Technology Stack
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(freshPlateTechStacks).map(([cat, techs], idx) => (
                  <div key={idx} className="card-minimal p-5 space-y-3">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      {cat.replace(/([A-Z])/g, ' $1').trim()}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {techs.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          /* URBuddy LLM Tab */
          <motion.div
            key="urbuddy"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-20"
          >
            {/* Top Showcase: 2-Column Minimalist Layout */}
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Info (5 Cols) */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      URBuddy LLM
                    </h3>
                    <p className="text-xs font-mono text-sky-400 font-medium">
                      Enterprise Document Intelligence & RAG System
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Engineered for processing and analyzing corporate documents across <strong className="text-slate-200">5+ SharePoint sources</strong> and enterprise SQL databases. Utilizes advanced Retrieval-Augmented Generation (RAG) to deliver auditable, contextual responses with strict on-premise governance.
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-xl">
                  <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>On-premise enterprise deployment with zero external data exposure.</span>
                </div>
              </div>

              {/* Right Column: High-Res UI Swiper (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[#090D15] border border-white/[0.1] shadow-2xl overflow-hidden p-2">
                  <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full rounded-xl"
                  >
                    <SwiperSlide>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-950">
                        <img src="/images/snipe_urbuddy.png" alt="URBuddy Main Interface" className="w-full h-full object-contain" />
                        <div className="absolute bottom-2 left-2 px-3 py-1 rounded bg-black/70 text-xs font-mono text-slate-300 border border-white/[0.1]">
                          URBuddy Enterprise Portal
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-950">
                        <img src="/images/milvus_db.png" alt="Milvus DB Collection" className="w-full h-full object-contain" />
                        <div className="absolute bottom-2 left-2 px-3 py-1 rounded bg-black/70 text-xs font-mono text-slate-300 border border-white/[0.1]">
                          Milvus Vector DB Schema & Collections
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            {/* Business Impact Grid */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                  // Business Impact & Metrics
                </span>
                <h4 className="text-2xl font-bold tracking-tight text-white">
                  Enterprise Value Delivered
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {urBuddyBusinessImpacts.map((impact, index) => (
                  <div key={index} className="card-minimal p-5 space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-sky-400">
                      <impact.icon className="w-4 h-4" />
                    </div>
                    <h5 className="text-sm font-bold text-white">{impact.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{impact.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <h4 className="text-xl font-bold tracking-tight text-white">
                  Enterprise Technology Stack
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(urBuddyTechStacks).map(([cat, techs], idx) => (
                  <div key={idx} className="card-minimal p-5 space-y-3">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      {cat.replace(/([A-Z])/g, ' $1').trim()}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {techs.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
