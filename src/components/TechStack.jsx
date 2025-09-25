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
    <section id="techstack" className="section-padding bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A curated list of technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gray-800/50 rounded-xl shadow-lg overflow-hidden border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:shadow-neon-blue/20 hover:-translate-y-1 hover:border-neon-blue/50 ${category.bgGradient}`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className={`w-8 h-8 mr-4 ${category.color}`} />
                  <h3 className={`text-xl font-bold ${category.color}`}>{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, sIndex) => (
                    <li key={sIndex} className="flex items-center text-gray-300">
                      <span className="text-neon-blue/80 mr-2">›</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack