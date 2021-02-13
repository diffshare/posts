---
title: CSSで接着する
createdAt: 2021-02-07 18:13
emoji: 🗞
---

本サイトをPCで見た場合のサイドバー、もしくはスマートフォンで見た場合の上部バーはスクロールしても常に見える状態になる。
これは `CSS` の `position: sticky` を設定することで実現できる。

```css
.side-bar {
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
}
```

