<template>
  <div>
    <CardMobile v-if="$isMobile" :article="article" />
    <CardDesktop v-else :article="article" />
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
