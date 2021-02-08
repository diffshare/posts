---
title: ビルド形式のブログ
createdAt: 2021-02-09 8:02
---

このようなビルド形式のブログは投稿から数分後に公開されるので違和感がある。
複雑なことを始めると、この手間もペイするのだろうか？

その他のブログと同じくHTMLとCSSで形を作っていくのだが
`Nuxt.js` のテンプレートエンジンを利用できるというのが存外楽である。
それだけ慣れてしまった、ということではあるのだが。

現状の、記事以外に何もない状態というのが気に入っている。
情報量が少ない。
少ないということは分かりやすいということだ。

さらに `GitHub Actions` の無料CIと無料Webページ公開で運用できている。
その気になれば `GitHub` 上のWebエディターで記事を書ける。
マイクロソフト様々なのだが良い時代になったものである。

```yml
jobs:
  ci:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [ubuntu-latest]
        node: [14]

    steps:
      - 色々
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages
          FOLDER: dist
```

最後の6行で `gh-pages` に公開できている。 手間がなくて良き。
