<template>
  <div class="portfolio-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">个人作品集</h1>
        <p class="page-description">展示UI/UX、品牌、插画等设计作品</p>
      </div>
    </div>
    
    <div class="container">
      <div class="filter-bar">
        <div class="filter-group">
          <span class="filter-label">作品分类</span>
          <el-select 
            v-model="selectedCategory" 
            placeholder="选择分类"
            class="filter-select"
          >
            <el-option label="全部" value="" />
            <el-option 
              v-for="category in categories" 
              :key="category.id" 
              :label="category.name" 
              :value="category.name" 
            />
          </el-select>
        </div>
        
        <div class="search-group">
          <span class="filter-label">搜索关键词</span>
          <el-input 
            v-model="searchQuery" 
            placeholder="搜索作品标题..."
            class="search-input"
          />
        </div>
        
        <div class="sort-group">
          <span class="filter-label">排序方式</span>
          <el-select 
            v-model="sortBy" 
            placeholder="排序方式"
            class="filter-select"
          >
            <el-option label="最新发布" value="newest" />
            <el-option label="按年份" value="year" />
          </el-select>
        </div>
      </div>
      
      <div class="works-grid" v-if="filteredWorks.length > 0">
        <WorkCard 
          v-for="work in filteredWorks" 
          :key="work.id" 
          :work="work" 
        />
      </div>
      
      <div class="empty-state" v-else>
        <div class="empty-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>
        <p class="empty-text">暂无作品</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import WorkCard from '@/components/WorkCard.vue'
import { works, categories } from '@/data/mockData'
import type { Work } from '@/types'

const selectedCategory = ref('')
const searchQuery = ref('')
const sortBy = ref('newest')

const filteredWorks = computed((): Work[] => {
  let result = [...works]
  
  if (selectedCategory.value) {
    result = result.filter(work => work.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(work => 
      work.title.toLowerCase().includes(query) || 
      work.description.toLowerCase().includes(query)
    )
  }
  
  const getSortDate = (work: Work): string => {
    return work.date || `${work.year}-01-01`
  }
  
  if (sortBy.value === 'newest') {
    result.sort((a, b) => getSortDate(b).localeCompare(getSortDate(a)))
  } else if (sortBy.value === 'year') {
    result.sort((a, b) => getSortDate(a).localeCompare(getSortDate(b)))
  }
  
  return result
})
</script>

<style lang="scss" scoped>
.portfolio-page {
  padding-top: 0px;
}

.portfolio-page .container {
  padding-bottom: 30px;
}

.page-header .container {
  padding-bottom: 0;
}

.page-header {
  padding: 40px 0 30px;
}

.page-title {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.page-description {
  font-size: 14px;
  color: var(--text-tertiary);
}

.filter-bar {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
}

.filter-group,
.sort-group,
.search-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  width: 100%;
  
  @media (min-width: 768px) {
    width: auto;
    flex-direction: row;
    align-items: center;
  }
}

.filter-label {
  font-size: var(--font-size-h4);
  color: var(--text-tertiary);
  font-weight: var(--font-weight-medium);
  
  @media (min-width: 768px) {
    width: 80px;
    text-align: right;
    margin-right: var(--spacing-sm);
  }
}

.search-group .filter-label {
  font-weight: 400;
  font-size: 14px;

  @media (min-width: 768px) {
    width: auto;
  }
}

.filter-group .filter-label {
  font-weight: 400;
  font-size: 14px;

  @media (min-width: 768px) {
    width: auto;
  }
}

.sort-group .filter-label {
  font-weight: 400;
  font-size: 14px;

  @media (min-width: 768px) {
    width: auto;
  }
}

.filter-select {
  width: 100%;
  
  @media (min-width: 768px) {
    width: 160px;
  }
}

.search-input {
  width: 100%;
  
  @media (min-width: 768px) {
    width: 160px;
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

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
}

.empty-icon {
  color: var(--text-quinary);
  margin-bottom: var(--spacing-md);
}

.empty-text {
  font-size: var(--font-size-h3);
  color: var(--text-tertiary);
}
</style>
