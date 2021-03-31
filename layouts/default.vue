<template>
  <div>
    <NavbarMobile v-if="$isMobile" />
    <NavbarDesktop v-else />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>
