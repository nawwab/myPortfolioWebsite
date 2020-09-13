<template>
  <Layout>
    <div class="mb-4">
      <h1 class="text-6xl">Halo<span class="text-sm text-secondary">//Hello</span></h1>
      <p class="text-2xl">Beberapa jurnal-online dan artikel:</p>
    </div>
    <BlogsList />
  </Layout>
</template>

<script>
import BlogsList from "~/components/BlogsList.vue"

export default {
  metaInfo: {
    title: 'Halo'
  },
  components: {
    BlogsList
  }
}
</script>
