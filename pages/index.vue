<template>
  <article>
    <div class="hero">
      <h1>posts.</h1>
      <span>投稿一覧</span>
    </div>
    <b-container>
      <div class="content">
        <p v-for="post of posts" :key="post.slug">
          <NuxtLink :to="{name: 'slug', params: {slug: post.slug}}">
            {{$moment(post.updatedAt).fromNow()}} / {{post.title}}
          </NuxtLink>
        </p>
      </div>
    </b-container>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts')
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch();

    return {posts}
  },
}
</script>

<style scoped>

</style>
