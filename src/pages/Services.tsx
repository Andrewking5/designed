import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { services } from '../data/services'
import { Layout, Hammer, Palette, MessageCircle } from 'lucide-react'

const iconMap = {
  Layout,
  Hammer,
  Palette,
  MessageCircle,
}

const process = [
  {
    step: '01',
    title: '需求溝通',
    description: '深入了解您的需求、預算與風格偏好，建立設計方向',
  },
  {
    step: '02',
    title: '空間規劃',
    description: '進行現場丈量，規劃動線與功能配置，提供3D模擬圖',
  },
  {
    step: '03',
    title: '設計提案',
    description: '提供完整的設計方案，包含材質、色彩與家具配置建議',
  },
  {
    step: '04',
    title: '工程執行',
    description: '監督施工進度與品質，確保設計完美呈現',
  },
  {
    step: '05',
    title: '軟裝配置',
    description: '精選家具與裝飾品，完成空間的最後點綴',
  },
  {
    step: '06',
    title: '完工驗收',
    description: '最終驗收與調整，確保每個細節都符合預期',
  },
]

export default function Services() {
  return (
    <div className="pt-20 pb-20 bg-primary-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-900 mb-6">
            服務項目
          </h1>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
            提供全方位的室內設計服務，從規劃到執行，全程專業陪伴，
            為您打造理想的生活空間
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Icon className="w-8 h-8 text-accent-600" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-primary-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-primary-700">
                          <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-12 text-center">
            服務流程
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all relative"
              >
                <div className="text-4xl font-bold text-accent-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">
            準備開始您的設計專案？
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            讓我們一起討論您的需求，創造理想的生活空間
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-accent-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
          >
            立即聯絡我們
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

