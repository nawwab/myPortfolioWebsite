<template>
  <Layout>
    <div class="mb-4">
      <h1 class="text-6xl">Halo<span class="text-sm text-secondary">//Hello</span></h1>
      <p class="text-2xl">Beberapa jurnal-online dan artikel:</p>
    </div>
    <BlogLists />
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import BlogLists from '~/components/BlogLists.vue'

export default {
  metaInfo() {
    return {
      title: 'Articles',
      meta: [
        { name: 'title', content: 'Articles' },
        {
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          property: 'twitter:url',
          content: `${this.$static.metadata.siteUrl}`
        },
        {
          property: 'twitter:title',
          content: 'Articles'
        },
        {
          property: 'twitter:image',
          content: '../nawwabzia-metapict.png'
        },
        // -----
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: `${this.$static.metadata.siteUrl}`
        },
        {
          property: 'og:title',
          content: 'Articles'
        },
        {
          property: 'og:image',
          content: '../nawwabzia-metapict.png'
        },
      ]
    }
  },
  components: {
    BlogLists
  }
}
</script>
