<template>
  <article ref="article">
    <h1>{{ article.title }}</h1>
    <Userbar :article="article" />
    <div class="d-flex flex-column align-items-end my-3">
      <img
        :src="require(`~/assets/images/${ article.image }`)"
        :height="dimension.height"
        :width="dimension.width"
        class="rounded"
      >
      <div class="text-secondary small">
        <a
          :href="`https://unsplash.com/@${ article.unsplash.username }?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`"
          target="_blank"
          class="text-secondary"
        >Photo de {{ article.unsplash.name }}</a> / <a href="https://unsplash.com/s/photos/revolution?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" class="text-secondary">Unsplash</a>
      </div>
    </div>

    <nuxt-content :document="article" />

    <author :author="article.author" />

    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  data () {
    return {
      dimension: {
        width: 0,
        height: 0
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.matchInfoBox()
    })
    window.addEventListener('resize', this.matchInfoBox)
  },
  methods: {
    matchInfoBox () {
      this.dimension.width = this.$refs.article.clientWidth
      this.dimension.height = parseInt(this.dimension.width * 2 / 3)
    }
  }
}
</script>
