<template>
    <Layout>
        <h1 class="text-6xl leading-tight">{{$page.post.title}}</h1>
        <p class="text-secondary text-sm mb-4">{{$page.post.date}}</p>
        <div v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: post (id: $id) {
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

<style scoped>
a {
  text-decoration: underline;
  font-weight: 400;
  color: #4299e1;
}
</style>