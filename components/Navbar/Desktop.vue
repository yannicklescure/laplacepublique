<template>
  <div class="navbar navbar-dark bg-dark fixed-top">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">
        La Place Publique
      </NuxtLink>
      <div class="d-flex justify-content-center align-items-center">
        <NuxtLink class="nav-item nav-link" to="/blog">
          Blog
        </NuxtLink>
        <NuxtLink class="nav-item nav-link" to="/about">
          À propos
        </NuxtLink>
        <ButtonTelegram :type="'btn-sm'" :color="'light'" class="ml-3" />
      </div>
    </div>
  </div>
</template>
