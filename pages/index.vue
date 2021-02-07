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
// import Vue from 'vue'
// import {Context} from "@nuxt/types";

export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts').fetch();

    // const [prev, next] = await $content('articles')
    //   .only(['title', 'slug'])
    //   .sortBy('createdAt', 'asc')
    //   .fetch()

    return {
      posts,
      // prev,
      // next
    }
  },
}
</script>

<style scoped>

</style>
