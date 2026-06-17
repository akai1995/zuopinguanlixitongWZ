<template>
  <div class="ai-detail-page">
    <div class="container" v-if="aiImage">
      <div class="nav-bar">
        <button class="nav-btn" @click="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
          <span>返回AI画廊</span>
        </button>
        
        <div class="nav-buttons">
          <button 
            class="nav-btn" 
            :disabled="!prevImage" 
            @click="goToPrev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8l-6 6 6 6"></path>
            </svg>
            <span>上一个</span>
          </button>
          <button 
            class="nav-btn" 
            :disabled="!nextImage" 
            @click="goToNext"
          >
            <span>下一个</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 8l6 6-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="ai-header">
        <h1 class="ai-title">{{ aiImage.title }}</h1>
        <div class="ai-meta">
          <div class="ai-tags">
            <span class="tag tag-tool">{{ aiImage.tool }}</span>
            <span class="tag">{{ aiImage.category }}</span>
          </div>
          <div class="ai-date">{{ aiImage.createdAt }}</div>
        </div>
      </div>
      
      <div class="ai-prompt">
        <h3 class="prompt-title">生成提示词</h3>
        <div class="prompt-content">
          <p>{{ aiImage.prompt }}</p>
          <button class="copy-btn" @click="copyPrompt" :class="{ copied: copied }">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>{{ copied ? '已复制' : '复制' }}</span>
          </button>
        </div>
      </div>
      
      <div class="ai-prompt" v-if="aiImage.negativePrompt">
        <h3 class="prompt-title">负面提示词</h3>
        <div class="prompt-content">
          <p>{{ aiImage.negativePrompt }}</p>
          <button class="copy-btn" @click="copyNegativePrompt" :class="{ copied: copied }">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>{{ copied ? '已复制' : '复制' }}</span>
          </button>
        </div>
      </div>
      
      <div class="ai-prompt" v-if="aiImage.params">
        <h3 class="prompt-title">生成参数</h3>
        <div class="prompt-content">
          <p>{{ aiImage.params }}</p>
        </div>
      </div>
      
      <div class="ai-images" v-if="aiImage.images && aiImage.images.length > 0">
        <h3 class="images-title">作品图片</h3>
        <div class="images-grid">
          <div 
            v-for="(image, index) in aiImage.images" 
            :key="index" 
            class="image-item"
            @click="openLightbox(image)"
          >
            <img :src="image" :alt="`${aiImage.title} - ${index + 1}`" class="gallery-image" loading="lazy" />
          </div>
        </div>
      </div>
      
    </div>
    
    <div class="empty-state" v-else>
      <p>作品不存在</p>
    </div>
    
    <div class="lightbox-overlay" v-if="lightboxOpen" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img :src="aiImage?.fullImage" :alt="aiImage?.title" class="lightbox-image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { aiImages } from '@/data/mockData'
import type { AiImage } from '@/types'

const route = useRoute()
const router = useRouter()
const aiImage = ref<AiImage | null>(null)
const copied = ref(false)
const lightboxOpen = ref(false)

const currentIndex = computed(() => {
  if (!aiImage.value) return -1
  return aiImages.findIndex(img => img.id === aiImage.value?.id)
})

const prevImage = computed(() => {
  return currentIndex.value > 0 ? aiImages[currentIndex.value - 1] : null
})

const nextImage = computed(() => {
  return currentIndex.value < aiImages.length - 1 ? aiImages[currentIndex.value + 1] : null
})

const loadImage = () => {
  const id = route.params.id as string
  aiImage.value = aiImages.find(img => img.id === id) || null
}

onMounted(() => {
  loadImage()
})

watch(() => route.params.id, () => {
  loadImage()
})

const goBack = () => {
  router.push('/ai-gallery')
}

const goToPrev = () => {
  if (prevImage.value) {
    router.push(`/ai/${prevImage.value.id}`)
  }
}

const goToNext = () => {
  if (nextImage.value) {
    router.push(`/ai/${nextImage.value.id}`)
  }
}

const copyPrompt = async () => {
  if (aiImage.value) {
    await navigator.clipboard.writeText(aiImage.value.prompt)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}

const copyNegativePrompt = async () => {
  if (aiImage.value?.negativePrompt) {
    await navigator.clipboard.writeText(aiImage.value.negativePrompt)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}

const openLightbox = (image?: string) => {
  if (image) {
    aiImage.value = { ...aiImage.value!, fullImage: image }
  }
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style lang="scss" scoped>
.ai-detail-page {
  padding-top: 0px;
}

.ai-detail-page .container {
  padding-top: 16px;
  padding-bottom: 30px;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--spacing-lg) 0;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-h4);
  color: var(--text-tertiary);
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-btn);
  transition: all 0.2s ease;
  
  span {
    font-size: 14px;
  }
  
  &:hover:not(:disabled) {
    color: var(--primary-color);
    background-color: var(--control-color);
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

.nav-buttons {
  display: flex;
  gap: var(--spacing-sm);
}

.ai-header {
  margin-bottom: var(--spacing-lg);
}

.ai-title {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.ai-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.ai-tags {
  display: flex;
  gap: var(--spacing-xs);
}

.tag {
  font-size: 12px;
  padding: 4px 8px;
  background-color: rgba(25, 98, 236, 0.1);
  color: var(--primary-color);
  border-radius: 2px;
  height: 24px;
  display: flex;
  align-items: center;
  
  &.tag-tool {
    background-color: rgba(27, 203, 139, 0.1);
    color: var(--success-color);
  }
}

.ai-images {
  margin-top: var(--spacing-lg);
}

.images-title {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.image-item {
  border-radius: var(--radius-card);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
}

.gallery-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
}

.ai-prompt {
  background-color: var(--card-color);
  border-radius: var(--radius-card);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.prompt-title {
  font-size: 16px;
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
}

.prompt-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  
  p {
    font-size: 14px;
    color: var(--text-tertiary);
    line-height: 1.6;
    word-break: break-all;
  }
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  align-self: flex-start;
  font-size: var(--font-size-h4);
  color: var(--primary-color);
  background: none;
  border: 1px solid var(--primary-color);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-btn);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
  
  &.copied {
    background-color: var(--success-color);
    border-color: var(--success-color);
    color: #fff;
  }
}

.ai-date {
  font-size: 14px;
  color: var(--text-quaternary);
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  color: var(--text-tertiary);
}

.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  border-radius: var(--radius-card);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}
</style>
