import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Brain, Code, Database, Cpu } from 'lucide-react'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "AI/ML Engineer • Full-Stack Developer • Mobile & Web Specialist"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100) // Typing speed: 100ms per character

      return () => clearTimeout(timeoutId)
    }
  }, [currentIndex, fullText])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingIcons = [
    { Icon: Brain, delay: 0, className: "top-20 left-10" },
    { Icon: Code, delay: 0.5, className: "top-32 right-16" },
    { Icon: Database, delay: 1, className: "top-48 left-1/4" },
    { Icon: Cpu, delay: 1.5, className: "top-40 right-1/3" }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-purple-gradient/10"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, className }, index) => (
        <motion.div
          key={index}
          className={`absolute ${className} hidden lg:block`}
          initial={{ y: 0, opacity: 0.3 }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-8 h-8 text-neon-blue/50" />
        </motion.div>
      ))}

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-neon-blue/30 shadow-lg"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 212, 255, 0.3)",
                    "0 0 40px rgba(0, 212, 255, 0.6)",
                    "0 0 20px rgba(0, 212, 255, 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <img
                  src="/images/profile.png"
                  alt="Software Engineer / AI Engineer Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-purple-gradient/20 flex items-center justify-center text-4xl md:text-5xl font-bold gradient-text"
                  style={{ display: 'none' }}
                >
                  AI
                </div>
              </motion.div>
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-neon-blue/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Software Engineer</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-4 h-8">
              <span>{displayedText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-neon-blue"
              >
                |
              </motion.span>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Experienced in building enterprise-grade AI systems, scalable web applications,
              and mobile solutions. Specializing in LLM applications, RAG systems, full-stack development,
              and transforming complex business challenges into intelligent automation solutions.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
          >
            {[
              "🧠 AI/ML Development",
              "⚛️ Full-Stack Web Apps",
              "📱 Mobile Development",
              "🔍 RAG Systems",
              "🏗️ Backend Architecture",
              "🚀 Production Systems"
            ].map((skill, index) => (
              <span key={index} className="tech-badge">
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-neon-blue to-purple-gradient hover:from-neon-blue/80 hover:to-purple-gradient/80 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Featured Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-16 bg-gradient-to-b from-neon-blue to-transparent rounded-full"></div>
      </motion.div>
    </section>
  )
}

export default Hero