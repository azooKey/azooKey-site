<template>
  <div>
    <PageHeader ref="hero" class="hero-header">
      <!-- App Icon and Typo -->
      <div class="icon-container">
        <img src="/static/assets/azooKeyLogo.png" class="icon" />
      </div>
      <div class="typo-container">
        <img src="/static/assets/azooKeyTypo.png" class="typo" alt="azooKey" />
      </div>
      <h1>
        <span class="text">自由自在な<wbr />キーボード<wbr />アプリ</span>
      </h1>
      <AppStoreLink></AppStoreLink>
    </PageHeader>
    <div :style="{ height: heroHeight + 'px' }"></div>
    <MiniHeader :visible="miniVisible" />
    <!-- Article Section with Introductions -->
    <PageArticle>
      <div class="intro-grid">
        <div v-for="item in introductions" :key="item.header" class="intro-card">
          <h3>{{ item.header }}</h3>
          <p v-html="item.contents"></p>
        </div>
      </div>
    </PageArticle>

    <!-- Footer Component -->
    <TheFooter></TheFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheFooter from '../components/TheFooter.vue'
import AppStoreLink from '../components/AppStoreLink.vue'
import PageHeader from '../components/PageHeader.vue'
import PageArticle from '../components/PageArticle.vue'
import MiniHeader from '../components/MiniHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

const title = 'azooKey - 自由自在なキーボードアプリ'
const description =
  'azooKeyは強力なカスタマイズ機能を搭載した日本語入力キーボードです。普段使う日本語タブをカスタマイズするカスタムキー機能とオリジナルの配列のキーボードを作るカスタムタブ機能でどこまでも自由にカスタマイズができます。ライブ変換、着せ替え、ユーザ辞書など、快適な入力のための機能もしっかりサポートしています。'
const image = 'https://azookey.netlify.app/static/og-image.png'

useHead({
  title: 'azooKey - 自由自在なキーボードアプリ',
  titleTemplate: ''
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
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Main',

  components: {
    TheFooter,
    AppStoreLink,
    PageHeader,
    PageArticle,
    MiniHeader
  },

  data() {
    return {
      isScrolled: false,
      miniVisible: false,
      drawerOpen: false,
      heroHeight: 0,
      // phone: phone,
      introductions: [
        {
          header: 'カスタムキー',
          contents:
            'azooKeyはカスタムキー機能を搭載する全く新しいキーボードです。お気に入りの絵文字や毎日使う記号を登録して、入力をもっと楽しくしましょう！'
        },
        {
          header: '「ライブ変換」機能を搭載',
          contents:
            'macOSで人気の「ライブ変換」がiOSでも使えます。打った側から自動で変換してくれるので、快適に文章を書くことができます！'
        },
        {
          header: 'キーボードの着せ替え',
          contents:
            'azooKeyはキーボードの着せ替えに対応しています。簡単な設定でパートナーや推しの写真を背景に設定できます。あなただけの特別なキーボードを作りましょう！'
        },
        {
          header: 'カスタムタブ',
          contents: `カスタマイズできるのはキーだけではありません。azooKeyではオリジナルの配列のキーボードを作成し、日本語入力と一緒に簡単に使うことができます。日本語入力とキーボードの拡張性を両立するazooKeyだけの機能です！詳しくは<router-link to="/CustomTabs">「カスタムタブについて」</router-link>をご覧ください！`
        },
        {
          header: '候補の拡大表示',
          contents:
            'azooKeyは入力中に漢字を拡大表示出来るので、一瞬で字の構造が分かります。難しい漢字を手書きするため画像検索する必要はもうありません。'
        },
        {
          header: 'おしゃれなフォント',
          contents:
            'おしゃれフォントでの入力も対応。かわいい英数字が簡単に入力できます。チャットもプロフィールもハッシュタグも綺麗なフォントで彩りましょう！'
        },
        {
          header: 'ユーザ辞書機能',
          contents:
            '高機能なユーザ辞書機能を搭載。固有名詞など好きな単語を登録できるほか、日付の入力やランダムな変換も設定可能です。端末のユーザ辞書とも連携します。'
        },
        {
          header: '操作も簡単',
          contents:
            'フリックしたりなぞったりしてカーソルを移動する機能を搭載しています。フリック入力なら削除キーをフリックして文頭まで一括で削除する機能もついています。'
        },
        {
          header: 'フルアクセスに対応',
          contents:
            'キーの振動フィードバック、クリップボードの履歴機能、ペーストボタンなど、フルアクセスを有効にすることでより便利な機能を利用することができます。もちろん、フルアクセスがオフでも全く問題なくご利用いただけます。'
        },
        {
          header: '入力スタイルの柔軟性',
          contents: `<ul>
            <li>ローマ字入力でもフリック入力でも「大文字に固定」機能を搭載しています。</li>
            <li>「英語はローマ字で日本語はフリック」のような設定にもしっかり対応しています。</li>
          </ul>`
        },
        {
          header: '多彩なカスタマイズ',
          contents: `<ul>
            <li>キーや変換候補の文字サイズは自由に設定できます。</li>
            <li>片手モードに対応しています。縦持ちと横持ち、ローマ字入力とフリック入力でそれぞれ設定できるので、細かいカスタマイズが可能です。</li>
          </ul>`
        },
        {
          header: '豊富な文字変換',
          contents: `<ul>
            <li>絵文字と顔文字の変換はそれぞれ自由にON/OFF可能です。</li>
            <li>全角数字「１２３」や上付き文字・下付き文字の「¹²³₄₅₆」にも変換できます。数式や化学式も簡単に書けます。</li>
            <li>半角カナ「ｱｲｳ」や濁点付き仮名「あ゙」も変換できます。</li>
          </ul>`
        },
        {
          header: '使い方',
          contents: `<p>1. azooKeyを<a href="https://apps.apple.com/us/app/azookey/id1542709230">ダウンロード</a></p>
                    <p>2. アプリを開くと表示される手順に従ってazooKeyを有効化・お好みの設定に変更</p>
                     <p>3. キーボードを開いたら地球儀マークを長押ししてazooKeyを選択</p>
        `
        },
        {
          header: 'OS',
          contents:
            'azooKeyはバージョン15.0以上のiOSに対応しています。最新のOSでの利用を常に推奨します。'
        },
        {
          header: '価格',
          contents:
            'アプリ本体・キーボードの利用・ともに無料です。現在課金が必要な機能は一切提供していません。'
        },
        {
          header: '個人情報について',
          contents:
            'azooKeyはユーザが入力した内容やその他の個人情報を一切収集しません。フルアクセスは一部機能を実現するためにのみ利用され、ユーザの許可なく外部に情報を送信することは絶対にありません。詳しくは<router-link to="/PrivacyPolicy">プライバシーポリシー</router-link>をお読みください。'
        },
        {
          header: 'このアプリについて',
          contents:
            'azooKeyはオープンソースソフトウェアとして開発されており、誰でもソースコードを閲覧し、利用し、配布することができます。<a href="https://github.com/ensan-hcl/azooKey">GitHub</a>で公開しています。'
        }
      ]
    }
  },

  methods: {
    handleScroll() {
      const y =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      const heroH = this.heroHeight || 38  // fallback if 0
      const showAt = heroH                  // show mini when past hero bottom
      const hideAt = heroH * 0.5            // hide when back above half
      if (!this.miniVisible && y > showAt) this.miniVisible = true
      else if (this.miniVisible && y < hideAt) this.miniVisible = false
    }
  },
  mounted() {
    this.$nextTick(() => {
      const raw = this.$refs.hero as any
      // If ref points to a component instance, use its $el; otherwise raw is an HTMLElement
      const el = raw?.$el ? (raw.$el as HTMLElement) : (raw as HTMLElement)
      this.heroHeight = el?.offsetHeight ?? 0
      window.addEventListener('scroll', this.handleScroll, { passive: true })
    })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap');

:root {
  --primary-color: #42b983;
  --font-sans: 'Inter', 'Noto Sans JP', sans-serif;
}

body {
  font-family: var(--font-sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  color: #222;
}

.typo {
  max-width: 500px;
  min-width: 300px;
  width: 44%;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: visible;
}

.typo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icon {
  margin-top: 0;
  margin-bottom: 20px;
  max-width: 120px;
  width: 15%;
  border-radius: 12%;
  position: relative;
  z-index: 10;
  box-shadow:
    0 1.9px 2.5px rgba(0, 0, 0, 0.057),
    0 5px 6.1px rgba(0, 0, 0, 0.076),
    0 10.1px 11.4px rgba(0, 0, 0, 0.086),
    0 19.2px 19.8px rgba(0, 0, 0, 0.092),
    0 38.4px 34.8px rgba(0, 0, 0, 0.1);
}

.screenshot {
  width: 24vw;
  height: 26.4vw;
  object-fit: cover;
  object-position: 0 100%;
}

.features {
  display: flex;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  gap: 1.5vw;
}

h1 {
  margin: 24px 0 16px;
  font-weight: bold;
  font-size: 3.5rem;
}

h3 {
  margin-bottom: -5px;
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

.intro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin: 32px 0;
}

.intro-card {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.04),
    0 6px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.intro-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.06),
    0 12px 20px rgba(0, 0, 0, 0.12);
}

.screenshot {
  border-radius: 8px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.04),
    0 4px 8px rgba(0, 0, 0, 0.08);
}

.hero-header {
  position: relative !important;   /* cancel sticky/fixed */
  top: auto !important;
}
</style>
