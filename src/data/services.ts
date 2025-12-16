import { Service } from '../types'

export const services: Service[] = [
  {
    id: '1',
    title: '空間規劃設計',
    description: '從零開始的完整空間規劃，包含動線分析、功能配置與風格定位。',
    icon: 'Layout',
    features: [
      '現場丈量與需求分析',
      '3D 空間模擬',
      '動線規劃',
      '風格定位建議',
    ],
  },
  {
    id: '2',
    title: '裝修工程管理',
    description: '專業的工程管理服務，確保施工品質與進度控制。',
    icon: 'Hammer',
    features: [
      '施工進度管控',
      '品質監控',
      '材料選購建議',
      '驗收服務',
    ],
  },
  {
    id: '3',
    title: '軟裝設計配置',
    description: '精選家具、燈具、藝術品與裝飾品，打造完整的空間氛圍。',
    icon: 'Palette',
    features: [
      '家具選購',
      '燈光設計',
      '藝術品配置',
      '色彩搭配',
    ],
  },
  {
    id: '4',
    title: '諮詢顧問服務',
    description: '提供專業的設計諮詢與建議，協助您做出最佳決策。',
    icon: 'MessageCircle',
    features: [
      '設計風格建議',
      '預算規劃',
      '材料選擇',
      '後續維護建議',
    ],
  },
]

