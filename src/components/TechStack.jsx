import React from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Brain,
  Shield,
  Server,
  Cloud,
  Cpu,
  Zap,
  FileCode,
  GitBranch,
  Container,
  Monitor
} from 'lucide-react'

const TechStack = () => {
  const skillCategories = [
    {
      title: "Frontend & Mobile Development",
      icon: Code,
      color: "text-neon-blue",
      bgGradient: "from-neon-blue/20 to-neon-blue/10",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "React Native", level: 90, icon: "📱" },
        { name: "Next.js", level: 88, icon: "🚀" },
        { name: "TypeScript", level: 92, icon: "📘" },
        { name: "Flutter", level: 85, icon: "🦋" },
        { name: "TailwindCSS", level: 90, icon: "🎨" },
        { name: "JavaScript", level: 95, icon: "⚡" },
        { name: "Vue.js", level: 80, icon: "💚" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-purple-gradient",
      bgGradient: "from-purple-500/20 to-purple-500/10",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "LangChain", level: 90, icon: "🦜" },
        { name: "OpenAI APIs", level: 88, icon: "🤖" },
        { name: "Transformers", level: 85, icon: "🧠" },
        { name: "Vector Databases", level: 90, icon: "🗂️" },
        { name: "RAG Systems", level: 92, icon: "🔍" },
        { name: "ColPali", level: 85, icon: "🎯" },
        { name: "TensorFlow", level: 82, icon: "🧮" }
      ]
    },
    {
      title: "Backend & API Development",
      icon: Server,
      color: "text-pink-gradient",
      bgGradient: "from-pink-500/20 to-pink-500/10",
      skills: [
        { name: "Node.js", level: 93, icon: "🟢" },
        { name: "FastAPI", level: 90, icon: "⚡" },
        { name: "Express.js", level: 95, icon: "🌐" },
        { name: "GraphQL", level: 82, icon: "🔗" },
        { name: "REST APIs", level: 95, icon: "🌐" },
        { name: "Microservices", level: 88, icon: "🔧" },
        { name: "API Security", level: 89, icon: "🛡️" }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "text-yellow-400",
      bgGradient: "from-yellow-400/20 to-yellow-400/10",
      skills: [
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MySQL", level: 88, icon: "💿" },
        { name: "Oracle Database", level: 85, icon: "🗃️" },
        { name: "Redis", level: 85, icon: "⚡" },
        { name: "Firebase", level: 87, icon: "🔥" },
        { name: "Vector DBs", level: 88, icon: "🧮" },
        { name: "Milvus", level: 86, icon: "🧠" },
        { name: "SQL Optimization", level: 89, icon: "🚀" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-green-400",
      bgGradient: "from-green-400/20 to-green-400/10",
      skills: [
        { name: "Google Cloud", level: 85, icon: "🌤️" },
        { name: "Docker", level: 92, icon: "🐳" },
        { name: "Kubernetes", level: 80, icon: "⚙️" },
        { name: "Vercel", level: 90, icon: "▲" },
        { name: "CI/CD", level: 85, icon: "🔄" },
        { name: "Linux", level: 90, icon: "🐧" },
        { name: "Nginx", level: 83, icon: "🌐" }
      ]
    },
    {
      title: "Security & Authentication",
      icon: Shield,
      color: "text-cyan-400",
      bgGradient: "from-cyan-400/20 to-cyan-400/10",
      skills: [
        { name: "JWT Tokens", level: 92, icon: "🎫" },
        { name: "OAuth 2.0", level: 88, icon: "🛡️" },
        { name: "Firebase Auth", level: 85, icon: "🔐" },
        { name: "HTTPS/TLS", level: 89, icon: "🔗" },
        { name: "API Security", level: 87, icon: "🚨" },
        { name: "Rate Limiting", level: 86, icon: "🚦" },
        { name: "Input Validation", level: 91, icon: "✅" },
        { name: "Encryption", level: 85, icon: "🔒" }
      ]
    }
  ]

  const certifications = [
    { name: "Full-Stack Developer", issuer: "Meta", year: "2024", icon: "⚛️" },
    { name: "Mobile App Developer", issuer: "Google", year: "2024", icon: "📱" },
    { name: "AI/ML Engineer", issuer: "AWS", year: "2024", icon: "🧠" },
    { name: "Cloud Architect", issuer: "Google Cloud", year: "2023", icon: "☁️" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="techstack" className="section-padding bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with across Full-Stack Development, AI/ML, Mobile Apps, and Cloud Infrastructure
          </p>
        </motion.div>


        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React.js", "React Native", "Node.js", "Python", "TypeScript", "Flutter",
              "Next.js", "Express.js", "FastAPI", "PostgreSQL", "AWS",
              "Docker", "Firebase", "TailwindCSS", "GraphQL", "JWT", "OAuth",
              "Vue.js", "MySQL", "Redis", "Kubernetes", "Milvus"
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="tech-badge cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default TechStack