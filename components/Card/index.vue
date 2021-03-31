<template>
  <div>
    <CardMobile v-if="$device.isMobile" :article="article" />
    <CardDesktop v-if="$device.isDesktop" :article="article" />
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
