---
title: Nuxt.jsでブログを作成してGitHub Pagesに投稿する
description: Nuxt.jsを使用したブログ作りについて
---

Nuxt.jsでブログを作成してGitHubにプッシュするとGitHub ActionsでビルドされGitHub Pagesに公開されるシステムを構築する。

なお [Zenn](https://zenn.dev/) のデザインが好みなのでインスパイヤする。

# content モジュール

@nuxt/content を導入する。

このモジュールを用いることで `/content` 以下に作成された `markdown` などのファイルを nuxt 上で簡単に読み込むことが可能になる。
nuxt によると簡易な **Headless CMS** とされている。

```bash
yarn add @nuxt/content
```

`nuxt.config.js` も編集する。

```js
export default {
  modules: ['@nuxt/content']
}
```

# コンテンツを作成する

`content/posts/my-first-post.md` を作成して以下を記述する。

```
---
title: はじめてのブログ
description: はじめてのブログ
---
# はじめてのブログ

はじめてのブログです。
```

# コンテンツを表示する

`pages/_slug.vue` を作成して以下のように記載する。

```vue
<template>
    <article>
      <div class="hero">
        <h1>{{ post.title }}</h1>
        <span>UpdateAt: {{ post.updatedAt }}</span>
      </div>
      <div class="content">
        <nuxt-content :document="post"/>
      </div>
    </article>
</template>

<script>
export default {
  name: "_slug.vue",

  async asyncData({$content, params}) {
    const post = await $content('posts', params.slug).fetch();

    return {post}
  }
}
</script>
```

Nuxt では `asyncData()` を用いてページ描画前にデータを取得する。
このメソッドので `$content` を用いてコンテンツの `object` を取得している。
`markdown` は `HTML` にコンパイルされた状態で表示される。
