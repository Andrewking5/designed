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

        {/* Exclusive Package Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary-100 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-50 rounded-bl-full -z-0 opacity-50" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-semibold text-sm mb-4">
                熱門投資首選
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
                包租公 38 萬專案 - 單一房間標準報價
              </h2>
              <p className="text-lg text-primary-600 max-w-3xl mx-auto">
                專為房東量身打造的高 CP 值統包方案，包含水電、木工、地磚到門禁系統，
                一站式解決所有裝修需求，快速打造優質出租套房。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mr-3 text-sm">01</span>
                  水電與衛浴設備
                </h3>
                <ul className="space-y-3 mb-8 text-primary-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>衛浴全套</strong>：凱撒馬桶、洗手台、蓮蓬頭、除霧鏡、排風機等</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>安全配線</strong>：110V 太平洋 2.0 電線 / 220V 太平洋 5.5 電線</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>照明規劃</strong>：房間崁燈 6-8 組、浴室崁燈 2 組或主燈</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>獨立熱水</strong>：每間配置獨立鴻茂 12 加侖電熱水器</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mr-3 text-sm">02</span>
                  泥作與隔間工程
                </h3>
                <ul className="space-y-3 mb-8 text-primary-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>隔音隔間</strong>：採用工法繁瑣但隔音最佳的<strong>紅磚隔間</strong></span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>優質門扇</strong>：高成本隔音硫化銅門、白底彩繪浴室門</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>專業防水</strong>：浴室高度 120cm 以下彈性泥作防水 (保固3年)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>地磚鋪設</strong>：採用 60x60cm 進口拋光石英磚</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mr-3 text-sm">03</span>
                  木工與天花板
                </h3>
                <ul className="space-y-3 mb-8 text-primary-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>防火天花板</strong>：輕鋼架搭配矽酸鈣板 (防火耐燃一級)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mr-3 text-sm">04</span>
                  智能門禁與網路
                </h3>
                <ul className="space-y-3 mb-8 text-primary-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Mifare 門禁</strong>：與悠遊卡同級刷卡系統，附 20 個磁扣</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>網路設備</strong>：搭配 IP 分享器，滿足筆電與桌機與無線上網需求</span>
                  </li>
                </ul>

                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h4 className="font-bold text-primary-900 mb-3">加值服務與升級選項</h4>
                  <ul className="text-sm space-y-2 text-primary-700">
                    <li>• 板岩/馬賽克磁磚升級：單房間 $13,000 (30x60cm / 30x30cm)</li>
                    <li>• 樓層搬運費：每增加一層樓單房間 +$2,000 (有電梯 +$500)</li>
                    <li>• 陽台外推拆除搬運：單戶 $20,000</li>
                    <li>• 大門更換：硫化銅門 $9,000 / 白鐵門 $30,000 / 雙玄關門 $40,000</li>
                    <li>• 全室彈性水泥防水 (25坪內)：$25,000</li>
                    <li className="text-accent-600 font-semibold mt-2 pt-2 border-t border-primary-200">
                      ★ 完工後提供一年完整保固
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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

