<template>
  <header :class="['app-header', $attrs.class]">
    <!-- 左アイコン -->
    <router-link to="/" class="icon-link">
      <img src="/static/assets/azooKeyLogo.png" class="icon" />
    </router-link>


    <img src="/static/assets/azooKeyTypo.png" class="typo-logo" alt="azooKey" />
    <h1 class="header-title">
      自由自在な<wbr />キーボード<wbr />アプリ
    </h1>

    <AppStoreLink class="appstore-link" />


    <!-- 右ハンバーガー -->
    <button class="hamburger" @click="drawerOpen = true">
      &#9776;
    </button>
  </header>

  <!-- ドロワー -->
  <transition name="fade">
    <nav v-if="drawerOpen" class="drawer">
      <button class="close" @click="drawerOpen = false">×</button>

      <!-- フッターと同じリンク -->
      <router-link v-for="link in links" :key="link.name" :to="link.destination" class="drawer-link"
        @click="drawerOpen = false">
        {{ link.name }}
      </router-link>

      <a href="https://github.com/ensan-hcl/azooKey" class="drawer-link" target="_blank" rel="noopener"
        @click="drawerOpen = false">
        azooKey on GitHub
      </a>
    </nav>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppStoreLink from './AppStoreLink.vue'

/* フッターと同じリンク配列をここへ再利用 */
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
<style>
/* ハンバーガーボタン */
.hamburger {
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 20px;
  display: none;
}

/* Add visibility override for shrink */
.app-header.shrink .hamburger {
  display: block;
}

/* ドロワー本体 */
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

.close {
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

/* フェード遷移 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ---------- Header base & shrink styles ---------- */
/* ---------- Header base & shrink styles ---------- */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #d5bab8;
  display: flex;
  flex-direction: column;
  /* 通常時は縦 */
  align-items: center;
  gap: 8px;
  padding: 48px 16px 16px;
  transition:
    padding 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.4s ease;
}

.app-header.shrink {
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
}

/* アイコンは常に 60×60px */
.app-header .icon,
.app-header.shrink .icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 12px;
  flex-shrink: 0;
}


/* Ensure icon stays centered */
.icon-link {
  margin: 0 auto;
}


/* 見出しテキスト */
.header-title {
  font-weight: bold;
  font-size: 1.4rem;
  margin: 0;
}

.app-header.shrink .header-title {
  display: none;
  /* 縮小時は隠す */
}

/* App Store ボタン ── 通常のみ表示 */
.appstore-link {
  margin-top: 16px;
}

.app-header.shrink .appstore-link {
  display: none !important;
  /* 強制的に非表示 */
}

/* Logo image */
.typo-logo {
  max-width: 300px;
  width: 60%;
  height: auto;
}

/* ---- Mobile override: keep aspect ratio & fit width ---- */
@media (max-width: 768px) {
  .typo-logo {
    width: auto;
    /* natural width */
    max-width: 70%;
    /* cap to viewport */
    height: auto;
    /* preserves aspect ratio */
    object-fit: contain;
    /* ensure no distortion */
  }
}

.app-header.shrink .typo-logo {
  display: none;
  /* hide logo in shrink mode */
}
</style>
