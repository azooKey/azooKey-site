<template>
  <div>
    <div ref="hero" class="hero-header">
      <ArticleHeader1>
        <span class="text">macOS版</span> <span class="text">azooKey</span>
      </ArticleHeader1>
      <!-- Place this tag where you want the button to render. -->
      <p>
       <GitHubButton
          href="https://github.com/ensan-hcl/azooKey-Desktop/releases"
          data-icon="octicon-github"
          data-size="large"
          aria-label="Check releases of ensan-hcl/azooKey-Desktop on GitHub">
        Check Latest Releases
      </GitHubButton>
      <div align="center">
        <img src="/static/assets/azooKey_macOS_overview.png" alt="azooKey on macOS" class="main-image" />
       </div>
          
    </p>
    </div>
    <MiniHeader :visible="true" />

    <!-- Article Section with Introductions -->
    <PageArticle>

      <h3>ニューラルかな漢字変換エンジン「Zenzai」搭載</h3>
        <p>azooKey on macOSではGPT-2をベースにしたニューラル言語モデル「zenz」を用い、高精度なかな漢字変換エンジン「Zenzai」を実現しました。</p>
        <p>Zenzaiの詳細については、開発に関するブログ記事をご覧ください。</p>
        <p>🔗<a href="https://zenn.dev/azookey/articles/ea15bacf81521e">ニューラルかな漢字変換エンジン「Zenzai」をazooKey on macOSに搭載します</a></p>
        <h3>外部処理に頼らない高精度変換</h3>
        <p>変換処理は全てローカル完結。入力は全て端末内で処理されます。ニューラルかな漢字変換はオンデバイスのモデルを用いています。</p>
        <h3>オープンソースの日本語入力システム</h3>
        <GitHubButton
          href="https://github.com/ensan-hcl/azooKey-Desktop"
          data-icon="octicon-star"
          aria-label="Star ensan-hcl/azooKey-Desktop on GitHub">
        Star
      </GitHubButton>
        <p>azooKey on macOSは全ての実装がオープンソースです。必要に応じて自分でビルドしたり、改造して使ったりすることも可能です。</p>
    </PageArticle>

    <!-- Footer Component -->
    <TheFooter></TheFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheFooter from '../components/TheFooter.vue'
import ArticleHeader1 from '../components/ArticleHeader1.vue'
import PageArticle from '../components/PageArticle.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import GitHubButton from 'vue-github-button'
import MiniHeader from '../components/MiniHeader.vue'

const title = 'macOS版 | azooKey - 自由自在なキーボードアプリ'
const description =
  'iOS向けキーボードアプリ「azooKey」のmacOS版は、ニューラルかな漢字変換エンジンを搭載した本格派日本語入力です。'
const image = 'https://azookey.com/static/og-image.png'

useHead({ title: 'macOS版 |' })

useSeoMeta({
  ogTitle: () => title,
  twitterTitle: () => title,
  description: () => description,
  ogDescription: () => description,
  twitterDescription: () => description,
  ogImage: () => image,
  twitterImage: () => image
})

export default defineComponent({
  name: 'DesktopPage',
  components: {
    TheFooter,
    PageArticle,
    ArticleHeader1,
    GitHubButton,
    MiniHeader
  },
  data() {
    return {}
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-image {
  z-index: 1;
  width: min(100%, 500px);
  border-radius: 0.1rem;
}
h1 {
  margin: 8px;
  font-weight: bold;
  font-size: 3rem;
}
.text {
  display: inline-block;
}
ul {
  text-align: left;
  padding: 10px;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
header {
  background-color: #ddccdd;
  padding-bottom: 15px;
}
footer {
  background-color: #ddccdd;
  padding-bottom: 15px;
}
/* Prevent MiniHeader from overlapping content */
.hero-header {
  margin-top: 80px; /* equal to MiniHeader height */
}
</style>
