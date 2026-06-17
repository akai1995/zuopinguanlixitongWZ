<template>
  <div class="work-detail-page">
    <div class="container" v-if="work">
      <div class="nav-bar">
        <button class="nav-btn" @click="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
          <span>返回作品集</span>
        </button>
        
        <div class="nav-buttons">
          <button 
            class="nav-btn" 
            :disabled="!prevWork" 
            @click="goToPrev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8l-6 6 6 6"></path>
            </svg>
            <span>上一个</span>
          </button>
          <button 
            class="nav-btn" 
            :disabled="!nextWork" 
            @click="goToNext"
          >
            <span>下一个</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 8l6 6-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="work-header">
        <h1 class="work-title">{{ work.title }}</h1>
        <div class="work-meta">
          <div class="work-tags">
            <span class="tag">{{ work.category }}</span>
          </div>
          <div class="work-date">{{ getDisplayDate(work.date, work.year) }}</div>
        </div>
      </div>
      
      <div class="work-description-card">
        <h3 class="description-title">作品描述</h3>
        <div class="description-content">
          <p>{{ work.description }}</p>
        </div>
      </div>
      
      <div class="work-links" v-if="work.link">
        <h3 class="links-title">项目链接</h3>
        <a :href="work.link" class="work-link" target="_blank" rel="noopener noreferrer">
          {{ work.link }}
        </a>
      </div>
      
      <div class="work-images" v-if="work.images && work.images.length > 0">
        <h3 class="images-title">作品图片</h3>
        <div class="images-grid">
          <div 
            v-for="(image, index) in work.images" 
            :key="index" 
            class="image-item"
            @click="openLightbox(image)"
          >
            <img :src="image" :alt="`${work.title} - ${index + 1}`" class="gallery-image" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="empty-state" v-else>
      <p>作品不存在</p>
    </div>
    
    <div class="lightbox-overlay" v-if="lightboxImage" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img :src="lightboxImage" alt="Lightbox" class="lightbox-image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { works } from '@/data/mockData'
import type { Work } from '@/types'

const route = useRoute()
const router = useRouter()
const work = ref<Work | null>(null)
const lightboxImage = ref<string | null>(null)

const getDisplayDate = (date: string | undefined, year: number): string => {
  return date || `${year}-01-01`
}

const currentIndex = computed(() => {
  if (!work.value) return -1
  return works.findIndex(w => w.id === work.value?.id)
})

const prevWork = computed(() => {
  return currentIndex.value > 0 ? works[currentIndex.value - 1] : null
})

const nextWork = computed(() => {
  return currentIndex.value < works.length - 1 ? works[currentIndex.value + 1] : null
})

const loadWork = () => {
  const id = route.params.id as string
  work.value = works.find(w => w.id === id) || null
}

onMounted(() => {
  loadWork()
})

watch(() => route.params.id, () => {
  loadWork()
})

const goBack = () => {
  router.push('/portfolio')
}

const goToPrev = () => {
  if (prevWork.value) {
    router.push(`/work/${prevWork.value.id}`)
  }
}

const goToNext = () => {
  if (nextWork.value) {
    router.push(`/work/${nextWork.value.id}`)
  }
}

const openLightbox = (image: string) => {
  lightboxImage.value = image
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxImage.value = null
  document.body.style.overflow = ''
}
</script>

<style lang="scss" scoped>
.work-detail-page {
  padding-top: 0px;
}

.work-detail-page .container {
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

.work-header {
  margin-bottom: var(--spacing-lg);
}

.work-title {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.work-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.work-tags {
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
}

.work-date {
  font-size: 14px;
  color: var(--text-quaternary);
}

.work-description-card {
  background-color: var(--card-color);
  border-radius: var(--radius-card);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.description-title {
  font-size: 16px;
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
}

.description-content {
  p {
    font-size: 14px;
    color: var(--text-tertiary);
    line-height: 1.6;
    word-break: break-all;
  }
}

.work-images {
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

.work-links {
  background-color: var(--card-color);
  border-radius: var(--radius-card);
  padding: 12px;
  margin-bottom: var(--spacing-md);
}

.links-title {
  font-size: 16px;
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
}

.work-link {
  font-size: 14px;
  color: var(--primary-color);
  text-decoration: none;
  word-break: break-all;
  
  &:hover {
    text-decoration: underline;
  }
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