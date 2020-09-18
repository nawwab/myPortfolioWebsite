<template>
  <Layout>
    <div class="p-4 rounded bg-gray-300 flex">
        <svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
        </svg>
        <p>Coming Soon...</p>
    </div>
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
export default {
  metaInfo() {
    return {
      title: 'Projects',
      meta: [
        { name: 'title', content: 'Projects' },
        {
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          property: 'twitter:url',
          content: `${this.$static.metadata.siteUrl}/projects/`
        },
        {
          property: 'twitter:title',
          content: 'Projects'
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
          content: `${this.$static.metadata.siteUrl}/projects/`
        },
        {
          property: 'og:title',
          content: 'Projects'
        },
        {
          property: 'og:image',
          content: '../nawwabzia-metapict.png'
        },
      ]
    }
  },
}
</script>