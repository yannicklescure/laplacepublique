<template>
  <div id="cards" ref="cards">
    <AppSearchInput />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'image', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
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
      this.dimension.width = this.$refs.cards.clientWidth
      this.dimension.height = parseInt(this.dimension.width * 2 / 3)
    }
  }
}
</script>
