export interface Work {
  id: string
  title: string
  description: string
  detailDescription: string
  category: string
  year: number
  date?: string
  cover: string
  images?: string[]
  link?: string
}

export interface AiImage {
  id: string
  title: string
  prompt: string
  negativePrompt?: string
  tool: string
  category: string
  thumbnail: string
  fullImage: string
  images?: string[]
  params?: string
  createdAt: string
}

export interface Category {
  id: string
  name: string
  count: number
}

export interface Tool {
  id: string
  name: string
  count: number
}
