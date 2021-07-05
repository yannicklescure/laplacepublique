<template>
  <div class="d-flex flex-column flex-md-row align-items-center justify-content-between">
    <NuxtLink
      v-if="prev"
      :to="{ path: prev.slug }"
      class="d-flex align-items-center text-body font-weight-normal text-decoration-none my-3"
    >
      <span class="mr-3 lead">
        <font-awesome-icon :icon="['fas', 'arrow-circle-left']" />
      </span>
      {{ prev.title }}
    </NuxtLink>
    <span v-else>
      &nbsp;
    </span>
    <NuxtLink
      v-if="next"
      :to="{ path: next.slug }"
      class="d-flex align-items-center text-body font-weight-normal text-decoration-none my-3"
    >
      {{ next.title }}
      <span class="ml-3 lead">
        <font-awesome-icon :icon="['fas', 'arrow-circle-right']" />
      </span>
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
