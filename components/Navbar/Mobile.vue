<template>
  <div>
    <div class="navbar navbar-dark bg-dark fixed-top">
      <NuxtLink to="/" class="navbar-brand">
        La Place Publique
      </NuxtLink>
      <span class="material-icons text-light">
        menu
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
