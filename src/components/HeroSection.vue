<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-title">
            <span class="greeting">Hi, I'm</span>
            <h1 class="name">{{ designerName }}</h1>
          </div>
          <h2 class="title">{{ designerTitle }}</h2>
          <p class="description">{{ designerDescription }}</p>
          <div class="hero-links">
            <router-link to="/portfolio" class="btn btn-primary">查看作品</router-link>
            <router-link to="/ai-gallery" class="btn btn-secondary">AI画廊</router-link>
          </div>
        </div>
        <div class="hero-visual">
          <div class="avatar-wrapper">
            <div class="avatar">
              <svg viewBox="0 0 200 200" width="200" height="200">
                <defs>
                  <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#1962EC" />
                    <stop offset="100%" style="stop-color:#1BCB8B" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="90" fill="url(#avatarGradient)" />
                <circle cx="100" cy="100" r="85" fill="var(--card-color)" />
                <circle cx="100" cy="90" r="35" fill="url(#avatarGradient)" />
                <ellipse cx="100" cy="130" rx="30" ry="35" fill="url(#avatarGradient)" />
              </svg>
            </div>
            <div class="avatar-decoration"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const designerName = 'Designer'
const designerTitle = 'UI Designer & Digital Artist'
const designerDescription = '专注于用户体验设计与数字艺术创作，用设计创造美好体验'
</script>

<style lang="scss" scoped>
.hero {
  height: 500px;
  display: flex;
  align-items: center;
  padding: var(--spacing-lg) 0;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(25, 98, 236, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.hero-text {
  @media (max-width: 768px) {
    order: 2;
  }
}

.greeting {
  font-size: var(--font-size-h3);
  color: var(--primary-color);
  font-weight: var(--font-weight-medium);
  display: block;
  margin-bottom: var(--spacing-sm);
}

.name {
  font-size: 48px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
}

.title {
  font-size: var(--font-size-h1);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.description {
  font-size: var(--font-size-h3);
  color: var(--text-tertiary);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.hero-links {
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-btn);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &.btn-primary {
    background-color: var(--primary-color);
    color: #fff;
    
    &:hover {
      background-color: #1554d0;
      transform: translateY(-2px);
    }
  }
  
  &.btn-secondary {
    background-color: var(--control-color);
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
    
    &:hover {
      background-color: var(--card-color);
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
  }
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
}

.avatar-wrapper {
  position: relative;
}

.avatar {
  position: relative;
  z-index: 2;
}

.avatar-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--success-color) 100%);
  border-radius: 30px;
  transform: rotate(15deg);
  z-index: 1;
  opacity: 0.1;
}
</style>
