<template lang="md">
  {{ content }}
  Current route is: {{ $route.path }}
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>
