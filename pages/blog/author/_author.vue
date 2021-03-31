<template>
  <div>
    <div class="mb-3">
      <span class="h1">{{ articles[0].author.name }}</span>
    </div>
    <div :class="['d-flex mb-3', { 'flex-column': $isMobile }]">
      <img
        :src="require(`~/assets/images/${ articles[0].author.image }`)"
        height="128"
        width="128"
        :class="['rounded', $isMobile ? 'mb-3' : 'mr-3']"
      >
      <p>{{ articles[0].author.bio }}</p>
    </div>
    <div class="mb-3">
      <span class="h3">Articles publiés</span>
    </div>
    <div v-if="articles">
      <div v-for="article in articles" :key="article.slug">
        <CardDesktop v-if="article" :article="article" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        }
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    }
  }
}
</script>
