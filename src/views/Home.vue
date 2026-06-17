<template>
  <div class="home-page">
    <HeroSection />
    
    <StatsSection />
    
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">个人作品</h2>
          <router-link to="/portfolio" class="section-link">查看全部</router-link>
        </div>
        <div class="works-grid">
          <WorkCard 
            v-for="work in featuredWorks" 
            :key="work.id" 
            :work="work" 
          />
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">AI生成艺术</h2>
          <router-link to="/ai-gallery" class="section-link">查看全部</router-link>
        </div>
        <div class="ai-grid">
          <AiCard 
            v-for="ai in featuredAiImages" 
            :key="ai.id" 
            :ai-image="ai" 
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import StatsSection from '@/components/StatsSection.vue'
import WorkCard from '@/components/WorkCard.vue'
import AiCard from '@/components/AiCard.vue'
import { works, aiImages } from '@/data/mockData'

const featuredWorks = works.slice(0, 4)
const featuredAiImages = aiImages.slice(0, 6)
</script>

<style lang="scss" scoped>
.home-page {
  padding-top: 0px;
}

.section {
  padding: 20px 0;
}

.section:last-child .container {
  padding-bottom: 20px;
}

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.section-title {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.section-description {
  font-size: var(--font-size-h4);
  color: var(--text-tertiary);
  margin-bottom: var(--spacing-sm);
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: var(--spacing-md);
  }
}

.section-link {
  font-size: 14px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s ease;

  &:hover {
    color: #1554d0;
  }
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-lg);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.ai-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-lg);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
