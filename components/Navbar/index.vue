<template>
  <div>
    <NavbarMobile v-if="$device.isMobile" />
    <NavbarDesktop v-else />
  </div>
</template>
