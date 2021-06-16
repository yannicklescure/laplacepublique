<template>
  <div>
    <a href="https://t.me/laplacepublique" target="_blank" :class="`btn ${ type } btn-${ color }`">
      <font-awesome-icon :icon="['fab', 'telegram-plane']" class="mr-2" />Telegram
    </a>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'dark'
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
