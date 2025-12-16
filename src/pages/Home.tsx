import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import Hero from '../components/Home/Hero'
import FeaturedWorks from '../components/Home/FeaturedWorks'
import ServicesPreview from '../components/Home/ServicesPreview'
import AboutPreview from '../components/Home/AboutPreview'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturedWorks />
      <ServicesPreview />
      <AboutPreview />
      
      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-primary-100 to-accent-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-accent-600" />
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6"
          >
            準備開始您的設計之旅？
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto"
          >
            讓我們一起創造屬於您的理想空間，將夢想轉化為現實。
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>立即聯絡</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

