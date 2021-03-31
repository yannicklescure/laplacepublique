<template>
  <div ref="card" class="carte mb-3">
    <NuxtLink :to="`/blog/${ article.slug }`" class="text-decoration-none text-body">
      <div class="d-flex flex-column">
        <div class="mb-3">
          <img
            :src="require(`~/assets/images/${ article.image }`)"
            width="100%"
            height="100%"
            class="rounded"
          >
        </div>
        <div class="d-flex flex-column justify-content-between">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
          <Userbar :article="article" />
        </div>
      </div>
    </NuxtLink>
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
  mounted () {
    this.$refs.card.style.backgroundColor = '#fff'
  }
}
</script>
