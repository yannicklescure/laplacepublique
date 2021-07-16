<template>
  <article>
    <SocialHead
      :title="socialMetaData.title"
      :description="socialMetaData.description"
      :image="socialMetaData.image"
    />
    <h1>{{ article.title }}</h1>
    <Userbar :article="article" />
    <div ref="article" class="d-flex flex-column align-items-end my-3">
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
        >Photo de {{ article.unsplash.name }}</a> / <a :href="`https://unsplash.com/s/photos/${ article.unsplash.keyWord }?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`" target="_blank" class="text-secondary">Unsplash</a>
      </div>
    </div>

    <nuxt-content :document="article" />
    <div class="d-flex justify-content-center mt-4 mb-5">
      <ButtonTelegram :type="'btn-lg'" :color="'primary'" />
    </div>
    <author :author="article.author" />
    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug', 'date'])
      .sortBy('date', 'desc')
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
  computed: {
    ogImage () {
      return require(`~/assets/images/${this.article.ogImage}`)
    },
    socialMetaData () {
      return {
        title: this.article.title,
        description: this.article.description,
        image: `https://www.laplacepublique.org${this.ogImage}`
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.matchInfoBox()
      window.addEventListener('resize', this.matchInfoBox)
    })
  },
  methods: {
    matchInfoBox () {
      this.dimension.width = this.$refs.article.clientWidth
      this.dimension.height = parseInt(this.dimension.width * 2 / 3)
    }
  }
}
</script>
