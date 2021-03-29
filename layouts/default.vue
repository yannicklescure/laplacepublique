<template>
  <div>
    <NavbarMobile v-if="isMobile" />
    <NavbarDesktop v-else />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'

export default {
  computed: {
    isMobile () {
      return isMobile
    }
  }
}
</script>
