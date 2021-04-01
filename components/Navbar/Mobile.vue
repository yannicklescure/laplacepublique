<template>
  <div class="fixed-top">
    <div class="navbar navbar-dark bg-dark">
      <NuxtLink to="/" class="navbar-brand" @click.stop.native="hide">
        La Place Publique
      </NuxtLink>
      <div class="text-light" @click="toggle">
        <span class="material-icons">{{ icon }}</span>
      </div>
    </div>
    <div v-if="show" class="d-flex flex-column bg-light vh-100 p-3 lead">
      <NuxtLink to="/blog" class="text-body mb-3" @click.stop.native="toggle">
        Blog
      </NuxtLink>
    </div>
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
      icon: 'menu',
      show: false
    }
  },
  methods: {
    toggle () {
      if (this.show) {
        this.icon = 'menu'
      } else {
        this.icon = 'close'
      }
      this.show = !this.show
    },
    hide () {
      this.icon = 'menu'
      this.show = false
    }
  }
}
</script>
