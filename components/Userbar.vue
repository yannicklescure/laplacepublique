<template>
  <div :class="['text-secondary d-flex', $device.isMobile ? 'flex-column' : 'justify-content-between align-items-center']">
    <div class="my-2">
      <a
        :href="`https://t.me/${ article.author.telegram }`"
        target="_blank"
        class="d-flex align-items-center text-body text-decoration-none"
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
    <div v-show="$device.isMobile" class="d-flex justify-content-between">
      <span>{{ formatDate(article.updatedAt) }}</span>
      <div class="mr-3">
        <ReadingTime :content="article" />
      </div>
    </div>
    <span v-show="$device.isDesktop">{{ formatDate(article.updatedAt) }} &bullet; <ReadingTime :content="article" /></span>
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
