<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div 
          class="stat-card" 
          v-for="(stat, index) in stats" 
          :key="stat.label"
          :class="`stat-card-${index + 1}`"
        >
          <div class="stat-content">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
          <div class="stat-icon">
            <component :is="stat.icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { works, aiImages } from '@/data/mockData'
import { FileImage, Bot, TrendingUp } from 'lucide-vue-next'

const totalWorks = works.length
const totalAiImages = aiImages.length
const recent30Days = Math.floor(Math.random() * 5) + 3

const stats = [
  { value: totalWorks, label: '作品总数', icon: FileImage },
  { value: totalAiImages, label: 'AI生图', icon: Bot },
  { value: recent30Days, label: '近30天新增', icon: TrendingUp }
]
</script>

<style lang="scss" scoped>
.stats-section {
  padding: 20px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.stat-card {
  background-color: var(--card-color);
  border-radius: var(--radius-card);
  padding: 10px 20px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
}

.stat-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: #fff;
  font-size: 24px;
  flex-shrink: 0;
  margin-left: auto;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
}

.stat-label {
  font-size: 14px;
  color: var(--text-tertiary);
}

.stat-card-1 {
  .stat-icon {
    background: linear-gradient(135deg, #1962EC 0%, #0016a0 100%);
  }
  .stat-value {
    color: #1962EC;
  }
}

.stat-card-2 {
  .stat-icon {
    background: linear-gradient(135deg, #1BCB8B 0%, #0EAF79 100%);
  }
  .stat-value {
    color: #1BCB8B;
  }
}

.stat-card-3 {
  .stat-icon {
    background: linear-gradient(135deg, #FC9131 0%, #E67E22 100%);
  }
  .stat-value {
    color: #FC9131;
  }
}
</style>