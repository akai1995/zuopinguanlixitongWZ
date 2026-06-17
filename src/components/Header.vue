<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled, 'dark': isDark }">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <span class="logo-text">{{ designerName }}</span>
        </router-link>
        
        <nav class="nav" :class="{ 'nav-active': isMobileMenuOpen }">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: $route.path === item.path }"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </router-link>
        </nav>
        
        <div class="header-actions">
          <button class="theme-toggle" @click="toggleTheme">
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          
          <button class="mobile-menu-toggle" @click="toggleMobileMenu">
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const designerName = '作品管理系统'
const isDark = ref(false)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { path: '/', label: '首页' },
  { path: '/portfolio', label: '个人作品' },
  { path: '/ai-gallery', label: 'AI画廊' }
]

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), 
              border-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), 
              box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  
  &.dark {
    background-color: rgba(20, 20, 20, 0.95);
  }
  
  &.header-scrolled {
    background-color: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
    
    &.dark {
      background-color: rgba(20, 20, 20, 0.98);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 var(--spacing-lg);
}

.logo {
  text-decoration: none;
  
  .logo-text {
    font-size: var(--font-size-h2);
    font-weight: var(--font-weight-medium);
    color: var(--primary-color);
  }
}

.nav {
  display: flex;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.98);
    border-bottom: 1px solid var(--border-color);
    padding: var(--spacing-lg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), 
                visibility 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), 
                transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
                background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
                border-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    
    &.nav-active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
}

.header.dark .nav {
  @media (max-width: 768px) {
    background-color: rgba(20, 20, 20, 0.98);
  }
}

.nav-link {
  text-decoration: none;
  font-size: var(--font-size-h3);
  color: var(--text-secondary);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-color);
  }
  
  &.active {
    color: var(--primary-color);
    font-weight: var(--font-weight-medium);
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  padding: var(--spacing-sm);
  border-radius: var(--radius-btn);
  transition: color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), 
              background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  
  &:hover {
    background-color: var(--control-color);
  }
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  padding: var(--spacing-sm);
  transition: color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  
  @media (max-width: 768px) {
    display: flex;
  }
}
</style>
