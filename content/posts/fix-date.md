---
title: 日時を修正
createdAt: 2021-02-08 08:13
---

記事のマークダウンで以下のような日付を設定する。

```markdown
---
title: 日時を修正
createdAt: 2021-02-08 08:13
emoji: ⏰
---
```

〇日前などの表示は `moment.js` を用いている。

`timezone` を気にせずに表示すると `6時間後` などのように未来の日時として表示されてしまった。良くない。

本件は moment.js さんに任せる。 `nuxt.config.js` に以下の記述を追加。

```js
moment: {
  defaultTimezone: 'Asia/Tokyo'
}
```

直った。良かった。

# 追記 2021/2/9

直っていなかった。仕方がないのでこうした。

```js
const post = await $content('posts', params.slug).fetch();
post.createdAt = $moment.tz(post.createdAt, 'Asia/Tokyo');
```
