import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Layout, Hammer, Palette, MessageCircle, ArrowRight } from 'lucide-react'
import { services } from '../../data/services'

const iconMap = {
  Layout,
  Hammer,
  Palette,
  MessageCircle,
}

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
            服務項目
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            提供全方位的室內設計服務，從規劃到執行，全程專業陪伴
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Layout
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-600 transition-colors"
                >
                  <Icon className="w-7 h-7 text-accent-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-600 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="text-xs text-primary-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors"
          >
            <span>了解更多服務</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

