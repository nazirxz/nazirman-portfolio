import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Send,
  MessageSquare,
  Calendar,
  Download,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nazirman.it@gmail.com",
      href: "mailto:nazirman.it@gmail.com",
      color: "text-neon-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 821-6654-3955",
      href: "tel:+6282166543955",
      color: "text-purple-gradient"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: "#",
      color: "text-pink-gradient"
    },
    {
      icon: Calendar,
      label: "Available",
      value: "Open to opportunities",
      href: "#",
      color: "text-yellow-400"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nazirman/",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400/10"
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/nazirxz",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-400/10"
    },
    {
      icon: ExternalLink,
      name: "Portfolio",
      href: "#",
      color: "hover:text-neon-blue",
      bgColor: "hover:bg-neon-blue/10"
    },
    {
      icon: Download,
      name: "Resume",
      href: "#",
      color: "hover:text-purple-400",
      bgColor: "hover:bg-purple-400/10"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next AI project? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects,
                  and ways to solve complex business challenges with cutting-edge technology.
                  Whether you're looking to build an enterprise AI system, develop mobile applications,
                  create scalable web solutions, or need consultation on your existing infrastructure,
                  I'd love to hear from you.
                </p>
              </motion.div>

              {/* Contact Details */}
              <motion.div variants={itemVariants} className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 card-glow bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-full bg-gray-700/50 ${info.color} group-hover:animate-pulse`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className={`font-medium ${info.color}`}>{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold text-gray-300 mb-4">
                  Connect on Social
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-full bg-gray-800/50 border border-gray-700 ${social.color} ${social.bgColor} transition-all duration-300 group`}
                    >
                      <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16 pt-8 border-t border-gray-700/50"
        >
          <p className="text-gray-400">
            © 2024 Software Engineer Portfolio. Built with React, TailwindCSS, and Framer Motion.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Specializing in AI/ML Development, Full-Stack Web Apps, and Mobile Solutions
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact