<template>
  <router-link :to="`/work/${work.id}`" class="work-card">
    <div class="card-cover">
      <img :src="work.cover" :alt="work.title" class="cover-image" loading="lazy" />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ work.title }}</h3>
      <p class="card-description">{{ work.description }}</p>
      <div class="card-tags">
        <span class="tag">{{ work.category }}</span>
        <span class="tag tag-year">{{ getDisplayDate(work.date, work.year) }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Work } from '@/types'

defineProps<{
  work: Work
}>()

const getDisplayDate = (date: string | undefined, year: number): string => {
  return date || `${year}-01-01`
}
</script>

<style lang="scss" scoped>
.work-card {
  display: flex;
  flex-direction: column;
  background-color: var(--card-color);
  border-radius: var(--radius-card);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
}

.card-cover {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.cover-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.work-card:hover .cover-image {
  transform: scale(1.05);
}

.card-content {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-tags {
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
  
  &.tag-year {
    background-color: transparent;
    color: var(--text-quinary);
    padding: 4px 0;
    margin-left: auto;
    font-size: 14px;
  }
}

.card-title {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-description {
  font-size: 14px;
  color: var(--text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
