<template>
  <div class="fixed-top">
    <div class="navbar navbar-dark bg-dark">
      <NuxtLink to="/" class="navbar-brand">
        La Place Publique
      </NuxtLink>
      <div class="text-light" @click="displayMenu">
        <span class="material-icons">{{ icon }}</span>
      </div>
    </div>
    <div v-if="show" class="d-flex flex-column bg-light vh-100 p-3 lead">
      <NuxtLink to="/blog" class="text-body mb-3">
        Blog
      </NuxtLink>
      <NuxtLink to="/blog" class="text-body mb-3">
        Blog
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icon: 'menu',
      show: false
    }
  },
  methods: {
    displayMenu () {
      if (this.show) {
        this.icon = 'menu'
      } else {
        this.icon = 'close'
      }
      this.show = !this.show
    }
  }
}
</script>
