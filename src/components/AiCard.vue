<template>
  <router-link :to="`/ai/${aiImage.id}`" class="ai-card">
    <div class="card-image">
      <img :src="aiImage.thumbnail" :alt="aiImage.title" class="thumbnail-image" loading="lazy" />
    </div>
    <div class="card-info">
      <h3 class="card-title">{{ aiImage.title }}</h3>
      <div class="card-tags">
        <span class="tag tag-tool">{{ aiImage.tool }}</span>
        <span class="tag">{{ aiImage.category }}</span>
      </div>
      <p class="card-prompt">{{ aiImage.prompt.slice(0, 50) }}...</p>
      <div class="card-date">{{ formatDate(aiImage.createdAt) }}</div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { AiImage } from '@/types'

defineProps<{
  aiImage: AiImage
}>()

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
</script>

<style lang="scss" scoped>
.ai-card {
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

.card-image {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.ai-card:hover .thumbnail-image {
  transform: scale(1.05);
}

.card-info {
  padding: var(--spacing-md);
}

.card-title {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-sm);
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

.card-prompt {
  font-size: 14px;
  color: var(--text-tertiary);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: var(--spacing-xs);
}

.card-date {
  font-size: 14px;
  color: var(--text-quinary);
}
</style>
