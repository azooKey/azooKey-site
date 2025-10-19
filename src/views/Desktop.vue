<template>
  <div class="desktop-page">
    <section class="hero-section">
      <div class="neural-background">
        <div class="neural-grid"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="ai-icon">🧠</span>
          <span>Powered by Neural AI</span>
        </div>
        <h1 class="hero-title">
          azooKey
          <span class="hero-subtitle">for macOS</span>
        </h1>
        <p class="hero-description">
          次世代ニューラルかな漢字変換エンジン「Zenzai」を搭載した、
          <br />革新的な日本語入力システム
        </p>

        <div class="download-section">
          <a
            href="https://github.com/azooKey/azooKey-Desktop/releases/download/v0.1.1/azooKey-release-signed.pkg"
            class="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="download-icon">⬇</span>
            Download for macOS
            <span class="download-format">.pkg</span>
          </a>
          <a
            href="https://github.com/ensan-hcl/azooKey-Desktop/releases"
            class="releases-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="github-icon">⭐</span>
            All Releases
          </a>
        </div>
      </div>
    </section>

    <MiniHeader :visible="true" />

    <section class="features-section">
      <div class="container">
        <div class="feature-card neural">
          <div class="feature-icon">🧠</div>
          <h3><span>ニューラル</span><span>かな漢字変換</span><span>エンジン</span><span>「Zenzai」</span></h3>
          <p>
            GPT-2をベースにしたニューラル言語モデル「zenz」により、従来の辞書ベース変換を超えた高精度な日本語変換を実現。
          </p>
          <a
            href="https://zenn.dev/azookey/articles/ea15bacf81521e"
            class="feature-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            技術詳細を読む →
          </a>
        </div>

        <div class="feature-card privacy">
          <div class="feature-icon">🔒</div>
          <h3>完全オンデバイス処理</h3>
          <p>
            すべての変換処理はローカル完結。入力データは一切外部に送信されず、プライバシーを完全に保護します。
          </p>
        </div>

        <div class="feature-card opensource">
          <div class="feature-icon">⚡</div>
          <h3><span>オープンソース</span> <span>&</span> <span>カスタマイズ可能</span></h3>
          <p>
            全ての実装がオープンソース。必要に応じて自分でビルドしたり、改造して使うことも可能です。
          </p>
          <div class="github-star-wrapper">
            <GitHubButton
              href="https://github.com/ensan-hcl/azooKey-Desktop"
              data-icon="octicon-star"
              aria-label="Star ensan-hcl/azooKey-Desktop on GitHub"
            >
              Star on GitHub
            </GitHubButton>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
  
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue'
import GitHubButton from 'vue-github-button'
import MiniHeader from '../components/layout/MiniHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'

defineOptions({ name: 'DesktopPage' })

const title = 'macOS版 | azooKey - 自由自在なキーボードアプリ'
const description =
  'iOS向けキーボードアプリ「azooKey」のmacOS版は、ニューラルかな漢字変換エンジンを搭載した本格派日本語入力です。'
const image = 'https://azookey.com/static/og-image.png'

useHead({ title })

useSeoMeta({
  ogTitle: () => title,
  twitterTitle: () => title,
  description: () => description,
  ogDescription: () => description,
  twitterDescription: () => description,
  ogImage: () => image,
  twitterImage: () => image
})
</script>

<style scoped>
.desktop-page {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  min-height: 100vh;
  overflow-x: hidden;
}
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 2rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin-top: 0;
}

.neural-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  pointer-events: none;
}

.neural-grid {
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, #00d4ff 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, #ff00aa 0%, transparent 50%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 400px 400px, 300px 300px, 50px 50px, 50px 50px;
  animation: neuralFlow 20s ease-in-out infinite;
}

@keyframes neuralFlow {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(1deg); }
  66% { transform: translate(-20px, 20px) rotate(-1deg); }
}

.hero-content {
  text-align: center;
  max-width: 800px;
  z-index: 2;
  position: relative;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.ai-icon {
  font-size: 1.2rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin: 0 0 1rem;
  background: linear-gradient(135deg, #fff, #a8edea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-subtitle {
  display: block;
  font-size: 0.4em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.download-section {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #00d4ff, #5b247a);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.download-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.download-btn:hover::before {
  left: 100%;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.4);
}

.download-icon {
  font-size: 1.3rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.download-format {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
}

.releases-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.releases-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.github-icon {
  font-size: 1.1rem;
}

.features-section {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
}

.feature-card.neural::before {
  background: linear-gradient(90deg, #00d4ff, #5b247a);
}

.feature-card.privacy::before {
  background: linear-gradient(90deg, #11998e, #38ef7d);
}

.feature-card.opensource::before {
  background: linear-gradient(90deg, #ff9a9e, #fecfef);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.feature-card h3 span {
  display: inline-block;
  white-space: nowrap;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-link {
  color: #00d4ff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  display: block;
  text-align: center;
}

.feature-link:hover {
  color: #5b247a;
}

.github-star-wrapper {
  margin-top: 1rem;
}
@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 1rem 2rem;
  }
  
  .download-section {
    flex-direction: column;
    gap: 1rem;
  }
  
  .download-btn {
    width: 100%;
    max-width: 300px;
  }
  
  .feature-card {
    padding: 2rem;
  }
}

a { color: inherit; }

/* Desktop page specific MiniHeader styling - using global styles */
:global(.desktop-page .mini-header) {
  background: rgba(15, 15, 35, 0.9) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

:global(.desktop-page .icon) {
  filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.5));
  transition: all 0.3s ease;
}

:global(.desktop-page .icon:hover) {
  filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.8));
  transform: scale(1.05);
}

:global(.desktop-page .hamburger) {
  color: white !important;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  transition: all 0.3s ease;
}

:global(.desktop-page .hamburger:hover) {
  color: #00d4ff !important;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
  transform: scale(1.1);
}

:global(.desktop-page .drawer) {
  background: rgba(26, 26, 46, 0.95) !important;
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

:global(.desktop-page .drawer-close) {
  color: white !important;
  transition: color 0.3s ease;
}

:global(.desktop-page .drawer-close:hover) {
  color: #00d4ff !important;
}

:global(.desktop-page .drawer-link) {
  color: rgba(255, 255, 255, 0.8) !important;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
}

:global(.desktop-page .drawer-link:hover) {
  color: #00d4ff !important;
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

/* Desktop page specific Footer styling */
:global(.desktop-page footer) {
  background: rgba(15, 15, 35, 0.9) !important;
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8) !important;
}

:global(.desktop-page footer a) {
  color: rgba(255, 255, 255, 0.8) !important;
  transition: color 0.3s ease;
}

:global(.desktop-page footer a:hover) {
  color: #00d4ff !important;
}
</style>
