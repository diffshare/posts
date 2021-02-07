<template>
  <div>
    <div class="sub-bar d-xl-none">
      <div>
        <img src="https://github.com/diffshare.png"/>
        <a href="https://github.com/diffshare">diffshare</a> / {{ post.title }}
      </div>
    </div>
    <b-container>
      <article>
        <div class="hero">
          <h1>{{ post.title }}</h1>
          <span>
            <b-icon icon="arrow-up-circle-fill"/>
            <span :title="$moment(post.createdAt)">{{ $moment(post.createdAt).fromNow() }}</span>
          </span>
        </div>
        <b-row>
          <b-col>
            <div class="content">
              <nuxt-content :document="post"/>
            </div>
          </b-col>
          <b-col cols="4" class="side d-none d-lg-block">
            <div class="side-bar">
              <div class="content" style="margin-bottom:32px;">
                <p>
                  <img src="https://github.com/diffshare.png"/>
                  <a href="https://github.com/diffshare">diffshare</a>
                </p>
                <p>
                  {{ post.title }}
                </p>
              </div>
              <div class="content" v-if="false">
                <h4>目次</h4>
                <b-nav v-b-scrollspy>
                  <b-nav-item :to="{hash: child.children[0].props.href}" v-for="child in post.body.children"
                              v-if="child.tag === 'h1'">
                    {{ child.children[1].value }}
                  </b-nav-item>
                </b-nav>
              </div>
            </div>
          </b-col>
        </b-row>
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
  },

  head() {
    return {title: this.post.title}
  }
}
</script>

<style>
@media (max-width: 575.98px) {
  .container {
    padding: 0;
  }
  .content {
    border-radius: 2px !important;
    padding: 16px 16px !important;
  }
  .row {
    margin: 0;
  }
  .col {
    padding: 0;
  }
  .hero {
    margin: 48px 0 32px !important;
  }
  .hero h1 {
    font-size: 24px !important;
    padding: 0 16px;
    line-height: 1.5;
  }
}

.sub-bar {
  margin-top: 0px;
  background: white;
  padding: 16px 40px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}

.sub-bar > div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.side .side-bar {
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
}

.sub-bar img {
  width: 24px;
  border-radius: 50%;
}

.sub-bar a {
  color: #555;
}

.side-bar img {
  width: 24px;
  border-radius: 50%;
}

.side-bar a {
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
  margin: 0 0 32px 0;
  font-size: xx-large;
}

article .hero span {
  color: #C3B5B5;
}

.content {
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
