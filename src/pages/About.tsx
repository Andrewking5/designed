import { motion } from 'framer-motion'
import { Heart, Target, Lightbulb, Users, Award, TrendingUp } from 'lucide-react'

const timeline = [
  {
    year: '2005',
    title: '公司成立',
    description: '紅圖室內設計成立，專注於提供高品質的室內設計服務',
    company: '紅圖室內設計',
  },
  {
    year: '2010',
    title: '業務拓展',
    description: '擴展商業空間與套房規劃業務，服務範圍更加多元化',
    company: '',
  },
  {
    year: '2015',
    title: '3D 設計導入',
    description: '引進專業 3D 渲染技術，讓客戶提前預見完工效果',
    company: '',
  },
  {
    year: '2024',
    title: '持續創新',
    description: '累積超過百件作品，服務遍及台北、新北、台中及廈門',
    company: '',
  },
]

const values = [
  {
    icon: Heart,
    title: '用心傾聽',
    description: '深入了解客戶需求，將想法轉化為實際設計',
  },
  {
    icon: Target,
    title: '精準執行',
    description: '從規劃到完工，每個細節都嚴格把關',
  },
  {
    icon: Lightbulb,
    title: '創新思維',
    description: '結合傳統與現代，創造獨特的設計風格',
  },
  {
    icon: Users,
    title: '專業團隊',
    description: '經驗豐富的設計與施工團隊，確保品質與效率',
  },
  {
    icon: Award,
    title: '品質保證',
    description: '嚴選建材與工法，提供長期售後服務保障',
  },
  {
    icon: TrendingUp,
    title: '持續進步',
    description: '不斷學習最新設計趨勢與技術，追求卓越',
  },
]

const skills = [
  { name: '空間規劃', level: 95 },
  { name: '風格設計', level: 92 },
  { name: '3D 建模渲染', level: 90 },
  { name: '材料選配', level: 88 },
  { name: '工程管理', level: 93 },
  { name: '套房投資規劃', level: 85 },
]

export default function About() {
  return (
    <div className="pt-20 pb-20 bg-primary-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-900 mb-6">
            關於我們
          </h1>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
            紅圖室內設計擁有超過 15 年的專業經驗，專注於創造既美觀又實用的生活空間。
            每個專案都是獨一無二的創作，我們用心傾聽客戶需求，將夢想轉化為現實。
          </p>
        </motion.div>

        {/* Company Overview - 移除個人照片，改為公司介紹 */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
                  設計理念
                </h2>
                <p className="text-primary-700 leading-relaxed">
                  我們相信每個空間都有其獨特的靈魂，設計不只是美化環境，更是創造生活的方式。
                  紅圖團隊致力於在美學與實用性之間找到完美平衡，讓每個設計都能真正改善居住者的生活品質。
                </p>
                <p className="text-primary-700 leading-relaxed">
                  從現代簡約到經典優雅，從住宅設計到商業空間，我們擅長各種風格與類型。
                  無論是新屋裝潢、舊屋翻新，還是套房投資規劃，我們都能根據客戶的需求，
                  量身打造專屬的設計方案。
                </p>
                <p className="text-primary-700 leading-relaxed">
                  我們提供完整的 3D 設計圖，讓客戶在施工前就能清楚看到完工後的效果，
                  確保每個細節都符合期望。專業的施工團隊與嚴格的品質管控，
                  是我們對客戶的承諾。
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-primary-900">
                  服務範疇
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-primary-900 mb-2">住宅設計</h4>
                    <p className="text-sm text-primary-600">新成屋裝潢、舊屋翻新、別墅豪宅</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-primary-900 mb-2">商業空間</h4>
                    <p className="text-sm text-primary-600">辦公室、店面、展示空間設計</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-primary-900 mb-2">套房規劃</h4>
                    <p className="text-sm text-primary-600">包租公專案、投資型套房規劃</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-primary-900 mb-2">3D 設計服務</h4>
                    <p className="text-sm text-primary-600">專業渲染圖、施工前視覺化呈現</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-primary-200">
              <div className="bg-white/80 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">100+</div>
                <div className="text-sm text-primary-600">完成專案</div>
              </div>
              <div className="bg-white/80 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">200+</div>
                <div className="text-sm text-primary-600">滿意客戶</div>
              </div>
              <div className="bg-white/80 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">15+</div>
                <div className="text-sm text-primary-600">年經驗</div>
              </div>
              <div className="bg-white/80 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">4</div>
                <div className="text-sm text-primary-600">服務城市</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-12 text-center">
            公司發展歷程
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  <div className="hidden md:block absolute left-6 w-4 h-4 bg-accent-600 rounded-full border-4 border-white z-10" />
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-accent-600">{item.year}</span>
                      <h3 className="text-xl font-semibold text-primary-900">{item.title}</h3>
                    </div>
                    <p className="text-primary-700 mb-2">{item.description}</p>
                    {item.company && (
                      <p className="text-sm text-primary-500">{item.company}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-12 text-center">
            核心價值
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-primary-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-12 text-center">
            專業服務能力
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-primary-900">{skill.name}</span>
                    <span className="text-sm text-primary-600">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-primary-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
