<template>
  <div class="container">
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="{ name: 'posts-slug', params: { slug: post.slug } }">
<!--        <img :src="article.img" />-->
        <div>
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </div>
      </NuxtLink>
    </li>
  </div>
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

<style>
</style>
