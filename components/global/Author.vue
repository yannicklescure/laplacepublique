<template>
  <div>
    <NuxtLink :to="`/blog/author/${ author.name }`" class="text-body text-decoration-none">
      <h4>Auteur</h4>
      <div class="d-flex align-items-center my-2">
        <img
          :src="require(`~/assets/images/${ author.image }`)"
          height="24"
          width="24"
          class="rounded-circle mr-2"
        >
        <span>{{ author.name }}</span>
      </div>
      <p>{{ author.bio }}</p>
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>
