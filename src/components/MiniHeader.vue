

<template>
  <!-- v-show でまるごと表示制御 -->
  <header class="mini-header" v-show="visible">
    <router-link to="/" class="icon-link">
      <img src="/static/assets/azooKeyLogo.png" class="icon" alt="azooKey" />
    </router-link>

    <button class="hamburger" @click="drawerOpen = true">&#9776;</button>
  </header>

  <transition name="drawer-fade">
    <!-- visible && drawerOpen ならドロワー -->
    <nav v-if="visible && drawerOpen" class="drawer">
      <button class="drawer-close" @click="drawerOpen = false">×</button>

      <a
        href="https://github.com/ensan-hcl/azooKey"
        target="_blank" rel="noopener"
        class="drawer-link"
        @click="drawerOpen = false"
      >azooKey on GitHub</a>

      <router-link
        v-for="link in links"
        :key="link.name"
        :to="link.destination"
        class="drawer-link"
        @click="drawerOpen = false"
      >{{ link.name }}</router-link>
    </nav>
  </transition>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const { visible } = defineProps<{ visible: boolean }>()

const links = [
  { name: 'オープンソース', destination: '/OpenSource' },
  { name: 'macOS版', destination: '/macOS' },
  { name: 'カスタムタブ', destination: '/CustomTabs' },
  { name: '利用規約', destination: '/TermsOfService' },
  { name: 'プライバシーポリシー', destination: '/PrivacyPolicy' },
  { name: 'Q&A', destination: '/QA' },
  { name: 'お問い合わせ', destination: '/Contact' }
]

const drawerOpen = ref(false)
</script>

<style scoped>
.mini-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #eceff5;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: visible;
  padding: 0 16px;
}

/* アイコン中央寄せ */
.icon-link {
  display: flex;
}

.icon {
  width: 60px;
  height: 60px;
  margin-top: 16px;
  object-fit: contain;
  border-radius: 12px;
  flex-shrink: 0;
}

/* ハンバーガーは右上に固定 */
.hamburger {
      display: block !important;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
}


/* Drawer */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 240px;
  height: 100vh;
  background: #faf8f8;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 2000;
}

.drawer-close {
  align-self: flex-end;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
}

.drawer-link {
  text-align: left;
  font-size: 1rem;
  color: #635959;
}

/* Fade transition */
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.25s ease;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}
</style>