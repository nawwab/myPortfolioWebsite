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
      <p class="text-xs">
        created using gridsome and vue.js
      </p>
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
