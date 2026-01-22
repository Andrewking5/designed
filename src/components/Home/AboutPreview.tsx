import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Calendar, ArrowRight, Building2 } from 'lucide-react'

const stats = [
  { icon: Building2, value: '100+', label: '完成專案' },
  { icon: Users, value: '200+', label: '滿意客戶' },
  { icon: Calendar, value: '15+', label: '年經驗' },
  { icon: Award, value: '4', label: '服務城市' },
]

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 移除個人照片，改為公司形象視覺 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <motion.img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                alt="紅圖室內設計"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">紅圖室內設計</h3>
                <p className="text-primary-100">專業 · 品質 · 創新</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
              關於紅圖
            </h2>
            <p className="text-lg text-primary-600 mb-6 leading-relaxed">
              紅圖室內設計擁有超過十五年的專業經驗，專注於創造既美觀又實用的生活空間。
              我們的專業團隊涵蓋設計、工程、3D 渲染等領域，為客戶提供一站式的完整服務。
            </p>
            <p className="text-lg text-primary-600 mb-8 leading-relaxed">
              從住宅設計、舊屋翻新到商業空間，從套房投資規劃到 3D 設計提案，
              我們致力於為每位客戶打造專屬的設計方案，將夢想轉化為現實。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
