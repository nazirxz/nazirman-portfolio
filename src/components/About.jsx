import React from 'react'
import { motion } from 'framer-motion'
import { Award, Zap, Target, Users, Brain } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Award,
      value: "3",
      label: "Enterprise AI Projects",
      color: "text-neon-blue"
    },
    {
      icon: Zap,
      value: "10K+",
      label: "Documents Integrated",
      color: "text-purple-gradient"
    },
    {
      icon: Users,
      value: "9",
      label: "Business Functions Integrated",
      color: "text-pink-gradient"
    },
    {
      icon: Brain,
      value: "2+",
      label: "Advanced AI Models Deployed",
      color: "text-neon-blue"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="section-padding bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate AI Engineer with expertise in building production-ready AI systems
            that solve real business problems at enterprise scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column: Profile Photo & Stats */}
          <div className="flex flex-col items-center space-y-8">
            {/* Profile Photo for About Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/profile.png"
                    alt="Software Engineer / AI Engineer - About"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div
                    className="w-full h-full bg-gradient-to-br from-neon-blue/10 to-purple-gradient/10 flex items-center justify-center text-6xl font-bold gradient-text"
                    style={{ display: 'none' }}
                  >
                    <Brain className="w-24 h-24" />
                  </div>
                </motion.div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-neon-blue/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-gradient/30 rounded-full animate-pulse delay-500"></div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 w-full max-w-md"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card-glow text-center group hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:animate-pulse`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="card-glow">
              <h3 className="text-2xl font-semibold text-neon-blue mb-4">
                AI & Machine Learning Expertise
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized in developing sophisticated AI systems using cutting-edge technologies like
                LangChain, RAG architectures, and advanced embedding models. Experience with both
                commercial and open-source LLMs, optimizing for performance and cost-effectiveness.
              </p>
            </div>

            <div className="card-glow">
              <h3 className="text-2xl font-semibold text-purple-gradient mb-4">
                Enterprise Integration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Proven track record in integrating AI solutions with enterprise systems like SharePoint,
                Oracle databases, and complex authentication systems. Focus on scalable, secure, and
                maintainable architectures that meet enterprise requirements.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-glow bg-gradient-to-r from-gray-800/50 to-gray-700/50"
        >
          <h3 className="text-2xl font-semibold gradient-text mb-4">
            Core Philosophy
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I believe in building AI systems that are not just technically impressive, but genuinely
            useful and reliable in production environments. My approach combines cutting-edge AI research
            with solid engineering principles, ensuring that solutions are scalable, maintainable, and
            aligned with business objectives.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About