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
  </header>
</template>

<script setup lang="ts">
import AppStoreLink from '../ui/AppStoreLink.vue'
</script>

<style>
/* ---------- Header base & shrink styles ---------- */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #eceff5; /* soft futuristic pastel */
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
