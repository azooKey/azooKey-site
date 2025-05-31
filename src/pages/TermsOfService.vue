<template>
  <div>
    <PageHeader>
      <ArticleHeader1>利用規約</ArticleHeader1>
    </PageHeader>
    <PageArticle>
      <h2>1.本規約について</h2>
      <h3>1.1.適用</h3>
      <p>
        azooKey（以下「本アプリ」といいます。）の利用規約（以下「本規約」といいます。）は、運営者が本アプリ上で提供するサービス（以下「本サービス」といいます。）を利用者が利用する際の一切の行為に適用されます。利用者は、本規約に従い本サービスを利用するものとします。
      </p>
      <h3>1.2.同意</h3>
      <p>
        利用者は自己の責任及び費用において本アプリをダウンロード、インストールし、本サービスを利用することができます。利用者が本サービスの利用を開始した場合本規約の全ての記載内容について同意したものとみなします。
      </p>
      <h3>1.3.変更</h3>
      <p>
        運営者は本規約をいつでも任意の理由で変更することができるものとし、事前の変更内容の周知に努めるものとします。利用者が本規約の変更の効力が生じた後に本サービスを利用する場合は変更及び変更後の本規約に同意したものとみなすこととし、変更に同意できない場合利用者が自ら本サービスの利用を停止するものとします。
      </p>
      <h2>2.権利・罰則・免責等</h2>
      <h3>2.1.著作権</h3>
      <p>本アプリの著作権及びその他の権利は、明示的に定めがある場合を除き、運営者に帰属します。</p>
      <h3>2.2.利用者コンテンツ</h3>
      <p>本サービスにおいて、利用者が作成したコンテンツ（以下「利用者コンテンツ」といいます。）は、利用者自身の責任において管理されるものとします。</p>
      <p>利用者が利用者コンテンツを運営者が管理するサーバ（以下「サーバ」といいます。）に送信した場合、明示的に定めがある場合を除き、当該利用者コンテンツは公開状態となり、インターネット上の不特定多数が閲覧できるものとします。共有後の公開範囲・拡散に関し、運営者は一切責任を負いません。</p>
      <p>利用者は、当該利用者コンテンツがサーバ上に存在する期間およびバックアップ保持期間中、運営者に対し、本サービスの提供・運営・改良および研究開発の目的で、無償かつ非独占的に利用（複製、保存、解析、改変、公衆送信を含む）する権利を許諾します。</p>
      <p>運営者は、本サービス運営上必要と判断する期間、サーバに送信された利用者コンテンツを保存し、事前通知なく削除または非公開化できるものとします。</p>
      <h3>2.3.禁止事項</h3>
      <p>
        利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。
      </p>
      <ul>
        <li>法令または公序良俗に違反する行為</li>
        <li>犯罪行為に関連する行為</li>
        <li>運営者、他の利用者、または第三者の権利を侵害する行為</li>
        <li>本サービスの運営を妨害する行為</li>
        <li>不正アクセスを試みる行為</li>
        <li>虚偽の情報を提供する行為</li>
        <li>運営者が不適切と判断する利用者コンテンツのサーバへの送信およびその他本サービス上での利用</li>
        <li>その他、運営者が不適切と判断する行為</li>
      </ul>
      <h3>2.4.違反への罰則</h3>
      <p>
        利用者が本規約に違反した場合、運営者はいつでも事前通知なく利用者の本サービスの利用を終了させることができます。この際、運営者は利用者に対して一切責任を負いません。
      </p>
      <h3>2.5.免責</h3>
      <ul>
        <li>
          運営者は、本サービスの利用により利用者に発生した損害について、一切責任を負いません。
        </li>
        <li>運営者は提供するコンテンツの完全性、確実性等について一切責任を負いません。</li>
        <li>
          利用者が本サービスを利用することにより第三者に対し損害を与えた場合利用者が自己の責任及び費用においてこれを賠償するものとします。
        </li>
        <li>
          運営者は利用者が本サービスが利用できないことによって引き起こされた損害について一切責任を負いません。
        </li>
      </ul>
      <h2>3.管轄</h2>
      <p>
        本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
      </p>

      <h2>4.連絡手段</h2>
      <p>
        ご不明な点があれば、<router-link to="./Contact">お問い合わせ</router-link
        >よりお気軽にお問い合わせください。
      </p>
      <h2>5.改訂履歴</h2>
      <p>2025年5月31日：改訂</p>
      <p>2020年12月4日：公開</p>
    </PageArticle>
    <TheFooter></TheFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheFooter from '../components/TheFooter.vue'
import ArticleHeader1 from '../components/ArticleHeader1.vue'
import PageHeader from '../components/PageHeader.vue'
import PageArticle from '../components/PageArticle.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

const description = '利用規約'
const image = 'https://azookey.netlify.app/static/og-image.png'
const title = '利用規約 | azooKey - 自由自在なキーボードアプリ'

useHead({
  title: '利用規約 |'
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
  name: 'TermsOfService',

  components: {
    TheFooter,
    ArticleHeader1,
    PageHeader,
    PageArticle
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2,
h3 {
  margin-top: 0px;
  padding: 10px;
  font-weight: bold;
}
ul {
  padding-left: 10px;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
