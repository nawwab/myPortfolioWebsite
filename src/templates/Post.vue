<template>
    <Layout>
        <g-image v-if="$page.post.thumbnail" :src="$page.post.thumbnail" class="rounded w-full h-64 object-cover mb-4" />
        <h1 class="text-3xl sm:text-6xl leading-tight">{{$page.post.title}}</h1>
        <p class="text-secondary text-sm mb-4">{{$page.post.date}}</p>
        <div v-html="$page.post.content" id="markdown-field"></div>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: post (id: $id) {
    thumbnail
    title
    date
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style lang="postcss">
#markdown-field p {
  @apply text-lg my-2;
}

#markdown-field a {
  @apply text-indigo-600 underline;
}

#markdown-field h2 {
  @apply text-xl font-bold;
}

#markdown-field ul {
  @apply list-disc;
}

#markdown-field li {
  @apply list-decimal;
}

#markdown-field pre {
  @apply bg-gray-900 p-4 rounded my-2;
}

#markdown-field code {
  @apply text-white;
}

#markdown-field img {
  @apply mx-auto rounded my-8;
}

@screen sm {
  #markdown-field h2 {
    @apply text-3xl;
  }
}
</style>