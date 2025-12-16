import { motion } from 'framer-motion'
import { Instagram, Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: 'mailto:contact@designstudio.com', label: 'Email' },
    { icon: Phone, href: 'tel:+886912345678', label: 'Phone' },
  ]

  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-4">Design Studio</h3>
            <p className="text-primary-300 text-sm leading-relaxed">
              專業的室內設計服務，為您打造理想的生活空間。
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/portfolio" className="text-primary-300 hover:text-accent-400 transition-colors">
                  作品集
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-300 hover:text-accent-400 transition-colors">
                  關於我
                </a>
              </li>
              <li>
                <a href="/services" className="text-primary-300 hover:text-accent-400 transition-colors">
                  服務項目
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary-300 hover:text-accent-400 transition-colors">
                  聯絡我
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">聯絡方式</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-primary-800 rounded-lg text-primary-200 hover:text-accent-400 hover:bg-primary-700 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-primary-800 text-center text-sm text-primary-400"
        >
          <p>&copy; {new Date().getFullYear()} Design Studio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

