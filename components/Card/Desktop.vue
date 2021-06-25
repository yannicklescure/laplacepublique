<template>
  <div class="carte mb-3 p-3">
    <client-only>
      <NuxtLink :to="`/blog/${ article.slug }`" class="text-decoration-none text-body">
        <div class="row m-0 p-0">
          <div class="col-8 p-0 d-flex flex-column justify-content-between">
            <div>
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
            </div>
            <Userbar :article="article" />
          </div>
          <div class="col pr-0">
            <img
              :src="require(`~/assets/images/${ article.image }`)"
              width="100%"
              height="100%"
              class="rounded"
              style="object-fit: cover"
            >
          </div>
        </div>
      </NuxtLink>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: null
      // required: true
    }
  }
}
</script>
