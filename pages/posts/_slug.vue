<template>
  <article>
    <nuxt-content :document="post"/>
    <p>Post last updated: {{ post.updatedAt }}</p>
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

<style scoped>


</style>
