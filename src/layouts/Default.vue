<template>
  <div class="min-h-screen flex flex-col justify-between">
    <header class="border-b">
      <nav class="py-4 flex justify-center">
        <g-link class="mr-8" to="/">artikel</g-link>
        <g-link class="mr-8" to="/project/">proyek</g-link>
        <g-link class="mr-8" to="/about/">tentang</g-link>
        <g-link class="" to="/contact/">kontak</g-link>
      </nav>
    </header>
    <div class="p-8 pb-16">
      <div class="max-w-screen-lg mx-auto">
        <slot />
      </div>
    </div>
    <footer class="border-t flex flex-col justify-center items-center py-4">
      <div class="mb-2 flex">
        <a href="https://gridsome.org/">
          <img src="../gridsome-logo.svg" class="w-8 mr-4" alt="Gridsome logo" title="created using Gridsome">
        </a>
        <a href="https://www.netlify.com/">
          <img src="../netlify-logo.svg" class="w-8" alt="Netlify logo" title="hosted by Netlify">
        </a>
      </div>
      <p class="text-xs">
        &lt;&gt; in Yogyakarta
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
