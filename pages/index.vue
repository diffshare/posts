<template>
  <article>
    <div class="hero">
      <h1>posts.</h1>
      <span>投稿一覧</span>
    </div>
    <b-container>
      <div class="content">
        <p v-for="post of posts" :key="post.slug">
          {{$moment(post.createdAt).fromNow()}} /
          <NuxtLink :to="{name: 'slug', params: {slug: post.slug}}">
            {{post.title}}
          </NuxtLink>
        </p>
      </div>
    </b-container>
  </article>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const posts = await $content('posts')
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch();

    return {posts}
  },
  head() {
    return {title: '記事一覧'}
  }
}
</script>

<style scoped>

</style>
