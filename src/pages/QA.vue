<template>
  <div>
    <div ref="hero" class="hero-header">
      <ArticleHeader1>Q&A</ArticleHeader1>
    </div>
    <MiniHeader :visible="true" />
    <PageArticle>
      <p>
        このQ&Aで解決しない場合、<router-link to="./Contact">お問い合わせ</router-link>ください。
      </p>
      <div v-for="qa in qa_list" :key="qa.question">
        <h2>{{ qa.question }}</h2>
        <p v-html="qa.answer"></p>
      </div>
    </PageArticle>
    <TheFooter></TheFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheFooter from '../components/TheFooter.vue'
import ArticleHeader1 from '../components/ArticleHeader1.vue'
import MiniHeader from '../components/MiniHeader.vue'
import PageArticle from '../components/PageArticle.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

const description = 'azooKeyに関するQ&Aをまとめています。'
const image = 'https://azookey.com/static/og-image.png'
const title = 'Q&A | azooKey - 自由自在なキーボードアプリ'

useHead({
  title: () => 'Q&A |'
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
  name: 'QA',

  components: {
    TheFooter,
    ArticleHeader1,
    PageArticle,
    MiniHeader
  },

  data() {
    return {
      qa_list: [
        {
          question: 'azooKeyの読み方を教えてください',
          answer: '「あずーきー」です。「あずき」と読んでも大丈夫です！'
        },
        {
          question: 'azooKeyのSNSアカウントはありますか？',
          answer:
            '<a href="https://twitter.com/azooKey_dev">Twitter</a>と<a href="https://bsky.app/profile/azookey.bsky.social">Bluesky</a>でアップデート情報などを発信しています。'
        },
        {
          question: 'azooKeyはオープンソースソフトウェアですか？',
          answer:
            'その通りです。<a href="https://github.com/ensan-hcl/azooKey">GitHub</a>でソースコードを公開し、オープンな開発を行っています。'
        },
        {
          question: 'azooKeyを作っているのは誰ですか？',
          answer:
            'azooKeyは<a href="https://github.com/ensan-hcl">Miwa Keita</a>が個人で開発しました。2020年から約4年に渡り継続的にメンテナンスを行っています。'
        },
        {
          question: 'azooKeyの利用にフルアクセスは必要ですか？',
          answer:
            '不要です。ただし、一部の機能でフルアクセスが必要になります。フルアクセスなしでもほとんど全ての機能を使えるため、積極的にフルアクセスを有効にする必要はありません。'
        },
        {
          question: '作ったカスタムタブをサイトに掲載して欲しいです',
          answer:
            'ぜひ<a href="https://forms.gle/cj9sBac4XVaJDtzR9">ご連絡ください</a>。原則掲載いたします。'
        },
        {
          question: 'azooKeyの変換エンジンはなんですか？',
          answer:
            'azooKeyはSwiftで実装された<a href="https://github.com/ensan-hcl/AzooKeyKanaKanjiConverter">独自開発の変換エンジン</a>を利用しています。Mozcは利用していませんが、アルゴリズムは強く参考にしています。'
        },
        {
          question: 'azooKeyにAndroid版はありますか？',
          answer:
            'ありません。キーボードアプリはプラットフォーム依存の実装が多く、開発者一人では難しいと考えています。ただし、Androidやその他のプラットフォームへの移植を主体的に進めてくださる方がいれば、実現する可能性があります。'
        },
        {
          question: '技術的な部分について知りたいです',
          answer:
            '開発者のブログ(<a href="https://qiita.com/ensan_hcl">Qiita</a>, <a href="https://zenn.dev/en3_hcl">Zenn</a>)をお読みください。少し情報は古いですが、開発の流れについては<a href="https://qiita.com/ensan_hcl/items/0aefbe9c0dbbadd0ee4e">「Swiftで日本語入力できるキーボードアプリを作った - Qiita」</a>で詳しく書きました。Keyboard Extensionに関わる内容についてはそのほかにもさまざま発信しています。'
        },
        {
          question: 'azooKeyの開発に参加したいです',
          answer:
            '開発に参加してくださる方がいれば大変助かります。まずは<a href="https://github.com/ensan-hcl/azooKey/blob/develop/docs/first_contribution.md">GitHubのドキュメント</a>などをご覧ください。'
        },
        {
          question: 'azooKeyを支援したいです',
          answer:
            '一番の大きな支援は、azooKeyを宣伝していただくことです。また、余裕があれば<a href="https://github.com/sponsors/ensan-hcl">GitHub Sponsors</a>で寄付をいただけると、開発の励みになります。'
        }
      ]
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 1.5rem;
  margin-top: 0px;
  margin-left: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
}
a {
  color: #635959;
}
/* Prevent MiniHeader from overlapping content */
.hero-header {
  margin-top: 80px; /* equal to MiniHeader height */
}
</style>
