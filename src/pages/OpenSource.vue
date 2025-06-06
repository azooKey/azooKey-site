<template>
  <div>
    <div ref="hero" class="hero-header">
      <ArticleHeader1>
        <span class="text">オープン</span><span class="text">ソース</span>
      </ArticleHeader1>
    </div>
    <MiniHeader :visible="true" />

    <PageArticle>
      <p>azooKeyや関連ソフトウェアをオープンソースで公開しています。</p>
      <h2>azooKey app</h2>
      <p>
        <GitHubButton
          href="https://github.com/ensan-hcl/azooKey"
          data-icon="octicon-star"
          aria-label="Star ensan-hcl/azooKey on GitHub"
          >Star</GitHubButton
        >
        <GitHubButton
          href="https://github.com/ensan-hcl/azooKey/fork"
          data-icon="octicon-repo-forked"
          aria-label="Fork ensan-hcl/azooKey on GitHub"
          >Fork</GitHubButton
        >
        <GitHubButton
          href="https://github.com/sponsors/ensan-hcl"
          data-icon="octicon-heart"
          aria-label="Sponsor @ensan-hcl on GitHub"
          >Sponsor</GitHubButton
        >
      </p>
      <p>
        azooKeyのiOS・iPadOS版アプリはGitHubでMIT
        LICENSEで開発・公開しています。誰でも開発に参加し、アプリを改善することができます。また、誰でもazooKeyをベースとして独自のキーボードアプリを作ることができます。
      </p>
      <h2>AzooKeyKanaKanjiConverter</h2>
      <p>
        <GitHubButton
          href="https://github.com/ensan-hcl/AzooKeyKanaKanjiConverter"
          data-icon="octicon-star"
          aria-label="Star ensan-hcl/AzooKeyKanaKanjiConverter on GitHub"
          >Star</GitHubButton
        >
        <GitHubButton
          href="https://github.com/ensan-hcl/AzooKeyKanaKanjiConverter/fork"
          data-icon="octicon-repo-forked"
          aria-label="Fork ensan-hcl/AzooKeyKanaKanjiConverter on
          GitHub"
          >Fork</GitHubButton
        >
      </p>
      <p>
        AzooKeyKanaKanjiConverterはazooKeyに搭載したかな漢字変換エンジンを実装するSwift
        Packageです。MIT LICENSEであり、どんなアプリにも簡単にかな漢字変換を組み込むことができます。
      </p>
      <p>
        また、azooKeyの辞書データもオープンソースで公開しています。辞書データは<a
          href="https://drive.google.com/drive/folders/1Kh7fgMFIzkpg7YwP3GhWTxFkXI-yzT9E?usp=sharing"
          >Google Drive</a
        >からダウンロード可能です。Apache License 2.0であり、自由に利用することができます。
      </p>

      <h2>CustardKit</h2>
      <p>
        <GitHubButton
          href="https://github.com/ensan-hcl/CustardKit"
          data-icon="octicon-star"
          aria-label="Star ensan-hcl/CustardKit on GitHub"
          >Star</GitHubButton
        >
        <GitHubButton
          href="https://github.com/ensan-hcl/CustardKit/fork"
          data-icon="octicon-repo-forked"
          aria-label="Fork ensan-hcl/CustardKit on GitHub"
          >Fork</GitHubButton
        >
      </p>
      <p>
        CustardKitはカスタムタブを作るためのSwift
        Packageです。CustardKitではカスタムタブのAPI仕様を公開しており、これに基づいてアプリ内で作れるよりさらに高度なカスタムタブを作成することができます。
      </p>
      <h2>azooKey official site</h2>
      <p>
        <GitHubButton
          href="https://github.com/ensan-hcl/azooKey-site"
          data-icon="octicon-star"
          aria-label="Star ensan-hcl/azooKey-site on GitHub"
          >Star</GitHubButton
        >
        <GitHubButton
          href="https://github.com/ensan-hcl/AzooKeyKanaKanjiConverter/issues"
          data-icon="octicon-issue-opened"
          aria-label="Issue ensan-hcl/AzooKeyKanaKanjiConverter on GitHub"
          >Issue</GitHubButton
        >
      </p>
      <p>
        本サイトはVue.jsで作成しています。MIT
        LICENSEであり、誰でもサイトの修正や改善を行うことができます。
      </p>
      <h2>開発を応援する</h2>
      <p>
        <GitHubButton
          href="https://github.com/sponsors/ensan-hcl"
          data-icon="octicon-heart"
          aria-label="Sponsor @ensan-hcl on GitHub"
          >Sponsor</GitHubButton
        >
      </p>
      <p>
        azooKeyの開発を応援するには、GitHub
        Sponsorsからサポートをお願いします。開発に必要な機材の購入や、開発者の生活費に充てさせていただきます。
      </p>
      <p>
        また、アプリケーション、変換エンジン、サイトの改善などにご協力いただければ、大変嬉しいです。
      </p>
    </PageArticle>
    <TheFooter></TheFooter>
  </div>
</template>

<script lang="ts">
import TheFooter from '../components/TheFooter.vue'
import PageArticle from '../components/PageArticle.vue'
import ArticleHeader1 from '../components/ArticleHeader1.vue'
import { defineComponent } from 'vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import GitHubButton from 'vue-github-button'
import MiniHeader from '../components/MiniHeader.vue'

const description =
  'iOS・iPadOS対応のキーボードアプリazooKeyはGitHubでオープンソースで開発・公開しています'
const image = 'https://azookey.com/static/og-image.png'
const title = 'オープンソース | azooKey - 自由自在なキーボードアプリ'

useHead({
  title: () => 'オープンソース |'
})

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
  name: 'OpenSource',
  components: {
    TheFooter,
    ArticleHeader1,
    PageArticle,
    GitHubButton,
    MiniHeader
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_img {
  z-index: 1;
  width: 100vw;
}

.screenshot_img {
  z-index: 1;
  width: min(100%, 500px);
  border-radius: 0.1rem;
}

button {
  font-size: 0.8rem;
  padding: 0.3rem;
  font-weight: bold;
  border-radius: 0.1rem;
  border: none;
  background-color: #eeeeee;
}
button:active {
  background-color: #dddddd;
}
button:hover {
  background-color: #dddddd;
}
input {
  width: 50%;
  font-size: 0.8rem;
  padding: 0.3rem;
  border: solid;
  border-width: 1px;
  border-radius: 0.3rem;
  border-color: #888888;
  color: #777777;
}
@media (max-width: 480px) {
  input {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.3rem;
    border: solid;
    border-width: 1px;
    border-radius: 0.3rem;
    border-color: #888888;
    color: #777777;
  }
}
h2 {
  font-weight: bold;
  font-size: 1.5rem;
}
.text {
  display: inline-block;
}
/* Prevent MiniHeader from overlapping content */
.hero-header {
  margin-top: 80px; /* equal to MiniHeader height */
}
</style>
