import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jmsl.tw@icloud.com',
      href: 'mailto:jmsl.tw@icloud.com',
    },
    {
      icon: Phone,
      label: '市話',
      value: '(02)8866-2275',
      href: 'tel:0288662275',
    },
    {
      icon: Phone,
      label: '手機',
      value: '0937-121-085',
      href: 'tel:0937121085',
    },
    {
      icon: MapPin,
      label: '地址',
      value: '台北市',
      href: '#',
    },
  ]

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
            聯絡我們
          </h1>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
            有任何問題或想要討論您的設計需求嗎？歡迎與我們聯絡，
            我們會盡快回覆您的訊息
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center group-hover:bg-accent-600 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">
                      {info.label}
                    </h3>
                    <p className="text-primary-600 text-sm">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="font-semibold text-primary-900 mb-4">
                社群媒體
              </h3>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 hover:bg-accent-600 hover:text-white transition-colors"
                  >
                    <span className="text-xs font-medium">{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-md">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-accent-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-primary-900 mb-2">
                    訊息已送出！
                  </h3>
                  <p className="text-primary-600">
                    我們會盡快回覆您的訊息
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                        placeholder="請輸入您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                        電話
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                        placeholder="0912-345-678"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2">
                        主題 *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      >
                        <option value="">請選擇主題</option>
                        <option value="consultation">設計諮詢</option>
                        <option value="project">專案討論</option>
                        <option value="quote">報價詢問</option>
                        <option value="other">其他</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                      訊息內容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                      placeholder="請描述您的需求或問題..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-8 py-4 bg-accent-600 text-white rounded-lg font-semibold hover:bg-accent-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>送出中...</span>
                      </>
                    ) : (
                      <>
                        <span>送出訊息</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

