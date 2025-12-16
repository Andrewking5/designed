export interface Project {
  id: string
  title: string
  category: string
  description: string
  images: string[]
  year: number
  location: string
  tags: string[]
  featured?: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
  company?: string
}

