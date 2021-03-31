<template>
  <div>
    <NavbarMobile v-show="$device.isMobile" />
    <NavbarDesktop v-show="$device.isDesktop" />
  </div>
</template>
