<template>
  <div>
    <div class="sub-bar">
      <img src="https://github.com/diffshare.png"/>
      <a href="https://github.com/diffshare">diffshare</a> / {{ post.title }}
    </div>
    <b-container>
      <article>
        <div class="hero">
          <h1>{{ post.title }}</h1>
          <span><b-icon icon="arrow-up-circle-fill"/> {{ $moment(post.createdAt).fromNow() }}</span>
        </div>
        <div class="content">
          <nuxt-content :document="post"/>
        </div>
      </article>
    </b-container>
  </div>
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

<style>
.sub-bar {
  margin-top: 1px;
  background: white;
  padding: 16px 40px;
}
.sub-bar img {
  width: 24px;
  border-radius: 50%;
}
.sub-bar a {
  color: #555;
}
article .hero {
  text-align: center;
  margin: 96px 0 48px
}
article .hero h1 {
  /*display: table-cell;*/
  width: 100%;
  vertical-align: middle;
  margin:0 0 32px 0;
  font-size: xx-large;
}
article .hero span {
  color: #C3B5B5;
}
article .content {
  background: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 80px;
}
.nuxt-content p {
  font-size: 16px;
  text-align: justify;
  line-height: 1.5;
}
.nuxt-content h1 {
  font-size: 24px;
  margin: 24px 0;
  padding: 8px;
  border-bottom: 1px solid #f3f0f0;
}
.nuxt-content h2 {
  font-size: 20px;
  margin: 24px 0;
}
.nuxt-content h3 {
  font-size: 16px;
  margin: 24px 0;
}
.nuxt-content-highlight > pre {
  border-radius: 8px;
}
</style>
