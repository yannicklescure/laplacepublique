<template>
  <div>
    <h4>À propos de l'auteur</h4>
    <div class="carte p-3">
      <NuxtLink :to="`/blog/author/${ author.name }`" class="text-body text-decoration-none">
        <div class="d-flex">
          <img
            :src="require(`~/assets/images/${ author.image }`)"
            height="96"
            width="96"
            class="rounded mr-3"
          >
          <div class="d-flex flex-column">
            <span class="text-body">{{ author.name }}</span>
            <span class="text-secondary">{{ author.bio }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
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
