<template>
  <div class="fixed-top">
    <div :class="['navbar', show ? 'navbar-light bg-light' : 'navbar-dark bg-dark']">
      <NuxtLink to="/" class="navbar-brand" @click.stop.native="hide">
        La Place Publique
      </NuxtLink>
      <div :class="show ? 'text-body' : 'text-light'" @click="toggle">
        <font-awesome-icon :icon="['fas', icon]" class="ml-3" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="show" class="d-flex flex-column bg-light vh-100 p-3 lead">
        <NuxtLink to="/blog" class="text-body text-decoration-none mb-3" @click.stop.native="toggle">
          Blog
        </NuxtLink>
        <NuxtLink to="/about" class="text-body text-decoration-none mb-3" @click.stop.native="toggle">
          À propos
        </NuxtLink>
        <NuxtLink to="/search" class="text-body text-decoration-none mb-3" @click.stop.native="toggle">
          Rechercher un article
        </NuxtLink>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
  },
  data () {
    return {
      icon: 'bars',
      show: false
    }
  },
  methods: {
    toggle () {
      if (this.show) {
        this.icon = 'bars'
      } else {
        this.icon = 'times'
      }
      this.show = !this.show
    },
    hide () {
      this.icon = 'bars'
      this.show = false
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
