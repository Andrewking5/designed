import { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: '現代簡約客廳設計',
    category: 'living-room',
    description: '以簡約線條和自然材質打造舒適的現代生活空間，運用大量留白與精選家具創造優雅氛圍。',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200',
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200',
    ],
    year: 2024,
    location: '台北市',
    tags: ['現代', '簡約', '自然材質'],
    featured: true,
  },
  {
    id: '2',
    title: '溫馨北歐風格臥室',
    category: 'bedroom',
    description: '融合北歐設計美學，以溫暖色調和舒適材質營造放鬆的睡眠環境。',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200',
    ],
    year: 2024,
    location: '新北市',
    tags: ['北歐', '溫馨', '舒適'],
    featured: true,
  },
  {
    id: '3',
    title: '開放式廚房設計',
    category: 'kitchen',
    description: '打破傳統格局，創造開放式廚房與餐廳的流暢動線，提升家庭互動。',
    images: [
      'https://images.unsplash.com/photo-1556912173-6943b8c01e6e?w=1200',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200',
    ],
    year: 2023,
    location: '桃園市',
    tags: ['開放式', '現代', '功能性'],
    featured: true,
  },
  {
    id: '4',
    title: '精品商業空間',
    category: 'commercial',
    description: '為精品品牌打造的高端展示空間，結合藝術與商業的完美平衡。',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200',
    ],
    year: 2023,
    location: '台北市',
    tags: ['商業', '精品', '高端'],
    featured: false,
  },
  {
    id: '5',
    title: '日式禪風茶室',
    category: 'other',
    description: '融合日式美學與現代機能，創造靜謐的冥想與品茶空間。',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200',
    ],
    year: 2023,
    location: '台中市',
    tags: ['日式', '禪風', '靜謐'],
    featured: false,
  },
  {
    id: '6',
    title: '工業風辦公空間',
    category: 'commercial',
    description: '運用工業元素與現代設計，打造創意工作環境。',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    ],
    year: 2022,
    location: '新竹市',
    tags: ['工業風', '辦公', '創意'],
    featured: false,
  },
]

export const categories = [
  { id: 'all', name: '全部作品' },
  { id: 'living-room', name: '客廳' },
  { id: 'bedroom', name: '臥室' },
  { id: 'kitchen', name: '廚房' },
  { id: 'commercial', name: '商業空間' },
  { id: 'other', name: '其他' },
]

