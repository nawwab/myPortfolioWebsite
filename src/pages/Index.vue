<template>
  <Layout>
    <BlogsList />
  </Layout>
</template>

<script>
import BlogsList from "~/components/BlogsList.vue"

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    BlogsList
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
