import { motion } from 'framer-motion'
import { Heart, Target, Lightbulb } from 'lucide-react'

const timeline = [
  {
    year: '2014',
    title: '開始設計生涯',
    description: '畢業於室內設計系，開始從事室內設計工作',
    company: '知名設計公司',
  },
  {
    year: '2017',
    title: '獨立設計師',
    description: '成立個人設計工作室，專注於住宅與商業空間設計',
    company: 'Design Studio',
  },
  {
    year: '2020',
    title: '獲獎肯定',
    description: '獲得台灣室內設計大獎最佳住宅設計獎',
    company: '',
  },
  {
    year: '2024',
    title: '持續成長',
    description: '持續精進設計技能，完成超過50個專案',
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
]

const skills = [
  { name: '空間規劃', level: 95 },
  { name: '風格設計', level: 90 },
  { name: '3D 建模', level: 85 },
  { name: '材料選配', level: 88 },
  { name: '工程管理', level: 82 },
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
            關於我
          </h1>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
            擁有超過十年的室內設計經驗，專注於創造既美觀又實用的生活空間。
            每個專案都是獨一無二的創作，我們用心傾聽客戶需求，將夢想轉化為現實。
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                alt="Designer"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
                設計理念
              </h2>
              <p className="text-primary-700 leading-relaxed mb-4">
                我相信每個空間都有其獨特的靈魂，設計不只是美化環境，更是創造生活的方式。
                我致力於在美學與實用性之間找到完美平衡，讓每個設計都能真正改善居住者的生活品質。
              </p>
              <p className="text-primary-700 leading-relaxed">
                從現代簡約到經典優雅，我擅長各種風格，並能根據客戶的個性與需求，
                量身打造專屬的設計方案。每個專案都是與客戶共同創作的過程，
                透過深入的溝通與理解，將夢想轉化為觸手可及的現實。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white p-4 rounded-xl">
                <div className="text-3xl font-bold text-accent-600 mb-1">50+</div>
                <div className="text-sm text-primary-600">完成專案</div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-3xl font-bold text-accent-600 mb-1">100+</div>
                <div className="text-sm text-primary-600">滿意客戶</div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-3xl font-bold text-accent-600 mb-1">10+</div>
                <div className="text-sm text-primary-600">年經驗</div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-3xl font-bold text-accent-600 mb-1">15+</div>
                <div className="text-sm text-primary-600">獲獎作品</div>
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
            經歷歷程
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            專業技能
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

