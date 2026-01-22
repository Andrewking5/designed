import { motion } from 'framer-motion'
import { Heart, Target, Lightbulb, Users, Award, TrendingUp } from 'lucide-react'

const timeline = [
  {
    year: '2000',
    title: '公司成立',
    description: '紅圖室內設計成立，經濟部申請立案，資本額500萬元',
    company: '紅圖室內設計',
  },
  {
    year: '2005',
    title: '專注套房規劃',
    description: '開始專注於套房隔間規劃，累積豐富的實務經驗',
    company: '',
  },
  {
    year: '2010',
    title: '代租代管服務',
    description: '擴展一條龍服務，提供代租代管專業服務',
    company: '',
  },
  {
    year: '2015',
    title: '合法申請專家',
    description: '成為套房合法申請專家，協助客戶符合建築管理法規',
    company: '',
  },
  {
    year: '2024',
    title: '傲人成績',
    description: '20餘年經驗，規劃超過1000間套房，成功幫助上百名房東提高收租報酬',
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
            紅圖室內設計經濟部申請立案，公司資本額500萬元，從事室內裝潢、套房規劃二十餘年經驗。<br />
            規劃過的套房超過1000間，成功幫助上百名房東將房屋提高收租報酬。
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
                  面對裝修時可能遇到的問題經驗豐富，尤其是建築管理法規對於套房隔間的規範日趨嚴謹。
                  許多一般裝潢業者或設計師都沒辦法給您最新最正確的資訊，我們能協助您<strong>合法申請</strong>，
                  讓您不用因為合法性而擔心。
                </p>
                <p className="text-primary-700 leading-relaxed">
                  我們不只是為您做<strong>空間規劃</strong>，更是為您做<strong>財務規劃</strong>，
                  讓房屋在合法的條件下為您創造最大的租金收益，並由專業的仲介團隊為您尋找下一間收租金雞母。
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-primary-900">
                  我們的特色
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-primary-900 mb-2">① 完整一條龍的服務</h4>
                    <ul className="text-sm text-primary-600 space-y-1 ml-4">
                      <li>• <strong>規劃</strong>：針對您的需求，給您專業的建議，讓您不只擁有高租金收入更能符合法令的規定</li>
                      <li>• <strong>簽約</strong>：品質有保障，無額外收費；工程不拖延，收費照合約</li>
                      <li>• <strong>合法申請</strong>：為您合法申請裝修執照，提高房屋價值</li>
                      <li>• <strong>施工</strong>：自有工班，套房施工經驗豐富，工程完工後續有完善的保固</li>
                      <li>• <strong>代租</strong>：免費為業主尋找優質房客，多年經驗幫您過濾掉爛房客</li>
                      <li>• <strong>代管</strong>：忙碌的您，出租後可委由專業團隊代您管理房屋的大小事，讓您輕鬆收租沒煩惱</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-primary-900 mb-2">② 創造價值</h4>
                    <p className="text-sm text-primary-600">
                      我們不只是為您做空間規劃，更是為您做財務規劃，讓房屋在合法的條件下為您創造最大的租金收益，並由專業的仲介團隊為您尋找下一間收租金雞母。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-primary-200">
              <div className="bg-white/80 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">1000+</div>
                <div className="text-sm text-primary-600">規劃套房</div>
              </div>
              <div className="bg-white/80 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">100+</div>
                <div className="text-sm text-primary-600">成功房東</div>
              </div>
              <div className="bg-white/80 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">20+</div>
                <div className="text-sm text-primary-600">年經驗</div>
              </div>
              <div className="bg-white/80 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">500萬</div>
                <div className="text-sm text-primary-600">資本額</div>
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
