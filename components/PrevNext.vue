<template>
  <div class="flex justify-between my-3">
    <div class="h4">
      Autres articles
    </div>
    <NuxtLink
      v-if="prev"
      :to="{ path: prev.slug }"
      class="text-body font-weight-normal text-decoration-none"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>
      &nbsp;
    </span>
    <NuxtLink
      v-if="next"
      :to="{ path: next.slug }"
      class="text-body font-weight-normal text-decoration-none"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>
      &nbsp;
    </span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
