<template>
  <div>
    <HeroHeader ref="hero" class="hero-header">
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
    </HeroHeader>
    <MiniHeader :visible="miniVisible" />
    <!-- Article Section with Introductions -->
    <ArticleContainer>
      <div class="intro-grid">
        <div v-for="item in introductions" :key="item.header" class="intro-card">
          <!-- Optional image -->
          <h3>{{ item.header }}</h3>
          <img
            v-if="item.img"
            :src="item.img"
            class="intro-img"
            :alt="item.header"
            loading="lazy"
          />
          <p v-html="item.contents"></p>
        </div>
      </div>
    </ArticleContainer>

    <!-- Footer Component -->
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppFooter from '../components/layout/AppFooter.vue'
import AppStoreLink from '../components/ui/AppStoreLink.vue'
import HeroHeader from '../components/layout/HeroHeader.vue'
import ArticleContainer from '../components/base/ArticleContainer.vue'
import MiniHeader from '../components/layout/MiniHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

const title = 'azooKey - 自由自在なキーボードアプリ'
const description =
  'azooKeyは強力なカスタマイズ機能を搭載した日本語入力キーボードです。最先端の高精度変換システム「Zenzai」を搭載し、完全オフラインで動作します。ライブ変換、着せ替え、ユーザ辞書など、快適な入力のための機能もしっかりサポートしています。普段使う日本語タブをカスタマイズするカスタムキー機能とオリジナルの配列のキーボードを作るカスタムタブ機能でどこまでも自由にカスタマイズができます。'
const image = 'https://azookey.com/static/og-image.png'

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
    AppFooter,
    AppStoreLink,
    HeroHeader,
    ArticleContainer,
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
          header: '最先端の変換システム「Zenzai」',
          contents:
            '最先端の変換システム「Zenzai」を搭載。設定で有効化すると高精度な変換を利用できます。完全オフラインで動作し、入力内容は外部に送信されません。ライブ変換と組み合わせて、より快適に文章入力が可能です。'
        },
        {
          header: 'カスタムキー',
          contents:
            'azooKeyはカスタムキー機能を搭載する全く新しいキーボードです。お気に入りの絵文字や毎日使う記号を登録して、入力をもっと楽しくしましょう！',
            img: '/static/assets/custom_key_sample.jpeg'
        },
        {
          header: '「ライブ変換」機能を搭載',
          contents:
            'macOSで人気の「ライブ変換」がiOSでも使えます。打った側から自動で変換してくれるので、快適に文章を書くことができます！',
          img: '/static/assets/sample_live_conversion.gif'
        },
        {
          header: 'キーボードの着せ替え',
          contents:
            'azooKeyはキーボードの着せ替えに対応しています。簡単な設定でパートナーや推しの写真を背景に設定できます。あなただけの特別なキーボードを作りましょう！',
          img: '/static/assets/sample_custom_theme.jpeg'
        },
        {
          header: 'カスタムタブ',
          contents: `カスタマイズできるのはキーだけではありません。azooKeyではオリジナルの配列のキーボードを作成し、日本語入力と一緒に簡単に使うことができます。日本語入力とキーボードの拡張性を両立するazooKeyだけの機能です！詳しくは <a href="/CustomTabs">「カスタムタブについて」</a> をご覧ください！`,
          img: '/static/assets/sample_custom_tab.jpeg'
        },
        {
          header: '候補の拡大表示',
          contents:
            'azooKeyは入力中に漢字を読みや文脈から予測し、ピッタリの候補を提示します。候補をタップすると拡大表示され、長い候補も迷わず選べます。'
        },
        {
          header: '英語入力',
          contents:
            '日本語入力と英語入力の両方に対応。キーボード切り替えなしで英単語をスムーズに入力できます。'
        },
        {
          header: 'ユーザ辞書',
          contents:
            'ユーザ辞書は、ユーザの入力頻度に応じて単語の学習や提案が行われるほか、日付の入力や独自の略語展開にも利用できます。'
        },
        {
          header: 'ランチャー機能',
          contents:
            'クリップボード履歴の貼り付け、よく使う文章の定型文挿入などをランチャーから素早く呼び出せます。'
        },
        {
          header: '辞書の拡張',
          contents:
            '専門用語や固有名詞など、あなたにとって必要な語彙を追加して、より効率よく入力できます。'
        },
        {
          header: 'ユーザ辞書',
          contents:
            '機能を搭載。固有名詞など好きな単語を登録できるほか、日付の入力やランダムな変換も設定可能です。端末のユーザ辞書とも連携します。',
          img: '/static/assets/sample_user_dictionary.jpeg'
        },
        {
          header: '操作も簡単',
          contents:
            'フリックしたりなぞったりしてカーソルを移動する機能を搭載しています。フリック入力なら削除キーをフリックして文頭まで一括で削除する機能もついています。',
          img: '/static/assets/sample_cursor_move.gif'
        },
        {
          header: 'フルアクセスに対応',
          contents:
            'キーの振動フィードバック、クリップボードの履歴機能、ペーストボタンなど、フルアクセスを有効にすることでより便利な機能を利用できます。もちろん、フルアクセスがオフでも全く問題なくご利用いただけます。',
          img: '/static/assets/sample_full_access.jpeg'
        },
        {
          header: '片手モード',
          contents: `片手モードに対応しています。縦持ちと横持ち、ローマ字入力とフリック入力でそれぞれ設定できます。片手モードではキーボードの高さも設定できます。`,
          img: '/static/assets/sample_one_hand_mode.jpeg'
        },
        {
          header: '🔁 豊富な文字変換',
          contents: `<ul>
            <li>絵文字と顔文字の変換はそれぞれ自由にON/OFF可能です。</li>
            <li>全角数字「１２３」や上付き文字・下付き文字の「¹²³₄₅₆」にも変換できます。数式や化学式も簡単に書けます。</li>
            <li>半角カナ「ｱｲｳ」や濁点付き仮名「あ゙」も変換できます。</li>
          </ul>`
        },
        {
          header: '🚀 使い方',
          contents: `<p>1. azooKeyを<a href="https://apps.apple.com/us/app/azookey/id1542709230">ダウンロード</a></p>
                    <p>2. アプリを開くと表示される手順に従ってazooKeyを有効化・お好みの設定に変更</p>
                     <p>3. キーボードを開いたら地球儀マークを長押ししてazooKeyを選択</p>
        `
        },
        {
          header: '✅ 最新のOSに対応',
          contents:
            'azooKeyはiOS 17.6以上に対応しています。iOS 26もサポートしています。最新のOSでの利用を常に推奨します。'
        },
        {
          header: '🆓 価格',
          contents:
            'アプリ本体・キーボードの利用・ともに無料です。現在課金が必要な機能は一切提供していません。'
        },
        {
          header: '🔒 個人情報について',
          contents:
            'azooKeyはユーザが入力した内容やその他の個人情報を一切収集しません。フルアクセスは一部機能を実現するためにのみ利用され、ユーザの許可なく外部に情報を送信することは絶対にありません。詳しくは<a href="/PrivacyPolicy">プライバシーポリシー</a>をお読みください。'
        },
        {
          header: 'ℹ️ このアプリについて',
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
  margin-bottom: 32px;
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

.hero-header {
  position: relative !important;   /* cancel sticky/fixed */
  top: auto !important;
}

/* Optional image inside intro-card */
.intro-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 12px;
  object-fit: cover;
}

@media (min-width: 1120px) {
  .intro-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
