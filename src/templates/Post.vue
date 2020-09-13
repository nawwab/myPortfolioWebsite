<template>
    <Layout>
        <h1>{{$page.post.title}}</h1>
        <p>{{$page.post.date}}</p>
        <div v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>
query ($path: String!) {
  post: post (path: $path) {
    title
    date
    content
  }
}
</page-query>

<script>
export default {
    metaInfo: {
      title: this.$page.post.title
    }
}
</script>