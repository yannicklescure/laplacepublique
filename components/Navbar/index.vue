<template>
  <div>
    <NavbarMobile v-if="$device.isMobile" />
    <NavbarDesktop v-if="$device.isDesktop" />
  </div>
</template>
