<template>
  <div class="d-flex flex-column h-100">
    <header>
      <Navbar />
    </header>
    <main class="flex-shrink-0">
      <div class="container">
        <Nuxt />
      </div>
    </main>
    <footer class="footer mt-auto py-3 bg-dark text-muted">
      <div class="container">
        <div class="d-flex justify-content-between">
          <a href="https://www.laplacepublique.org" class="text-muted">LaPlacePublique.org</a>
          <div class="d-flex align-items-center text-muted">
            <span class="mr-1">2021</span>
            <font-awesome-icon id="fish" :icon="['fas', 'fish']" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
  #fish {
    transform: rotate(180deg);
  }
</style>
