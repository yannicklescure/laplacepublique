<template>
  <div>
    <CardMobile v-show="$device.isMobile" :article="article" />
    <CardDesktop v-show="$device.isDesktop" :article="article" />
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
