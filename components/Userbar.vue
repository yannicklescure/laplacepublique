<template>
  <div class="d-flex justify-content-between align-items-center text-secondary">
    <div class="my-2">
      <a
        :href="`https://t.me/${ article.author.telegram }`"
        target="_blank"
        class="d-flex align-items-center text-secondary text-decoration-none"
      >
        <img
          :src="require(`~/assets/images/${ article.author.image }`)"
          height="24"
          width="24"
          class="rounded-circle mr-2"
        >
        <span>{{ article.author.name }}</span>
      </a>
    </div>
    <div>{{ formatDate(article.updatedAt) }} &bullet; <reading-time :content="article"></reading-time></div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
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
