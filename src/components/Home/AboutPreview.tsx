import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Calendar, ArrowRight } from 'lucide-react'

const stats = [
  { icon: Award, value: '50+', label: '完成專案' },
  { icon: Users, value: '100+', label: '滿意客戶' },
  { icon: Calendar, value: '10+', label: '年經驗' },
]

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                alt="Designer"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-3xl font-bold text-accent-600 mb-1">10+</div>
              <div className="text-sm text-primary-600">年專業經驗</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
              關於設計師
            </h2>
            <p className="text-lg text-primary-600 mb-6 leading-relaxed">
              擁有超過十年的室內設計經驗，專注於創造既美觀又實用的生活空間。
              每個專案都是獨一無二的創作，我們用心傾聽客戶需求，將夢想轉化為現實。
            </p>
            <p className="text-lg text-primary-600 mb-8 leading-relaxed">
              從現代簡約到經典優雅，我們擅長各種風格，致力於為每位客戶打造專屬的設計方案。
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-accent-600" />
                    </div>
                    <div className="text-2xl font-bold text-primary-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-600">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors"
            >
              <span>了解更多</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

