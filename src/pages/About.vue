<template>
  <Layout>
    <h1 class="text-3xl sm:text-6xl leading-tight mb-4">About Me</h1>
    <div id="content-field" class="mb-4">
      <p>
      Hello my name is Nawwab Zia, I'm an IT student and now I'm interested in WebDev world. feel free to visit
      my social media or any platform below:
      </p>
      <ul>
        <li>
          <a href="https://codepen.io/nawwab/pen/dyGoeZL">Codepen</a>: sometimes I do some stunning or stupid things with html and css here.
        </li>
        <li>
          <a href="https://github.com/nawwab">Github</a>: I store my programming stuff or my side project here.
        </li>
      </ul>
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
// import UnderConstruction from '~/components/UnderConstruction.vue'

export default {
  metaInfo() {
    return {
      title: 'About Me',
      meta: [
        { name: 'title', content: 'About Me' },
        {
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          property: 'twitter:url',
          content: `${this.$static.metadata.siteUrl}/about/`
        },
        {
          property: 'twitter:title',
          content: 'About Me'
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
          content: `${this.$static.metadata.siteUrl}/about/`
        },
        {
          property: 'og:title',
          content: 'About Me'
        },
        {
          property: 'og:image',
          content: '../nawwabzia-metapict.png'
        },
      ]
    }
  },
  // components: {
  //   UnderConstruction
  // }
}
</script>

<style lang="postcss">
#content-field p {
  @apply text-lg my-2;
}

#content-field a {
  @apply text-indigo-600 underline;
}

#content-field h2 {
  @apply text-xl font-bold;
}

#content-field ul {
  @apply list-disc;
}

#content-field ol {
  @apply list-decimal;
}

#content-field li {
  @apply text-lg my-2;
}

#content-field pre {
  @apply bg-gray-900 p-4 rounded my-2;
}

#content-field code {
  @apply text-white;
}

#content-field img {
  @apply mx-auto rounded my-8;
}

@screen sm {
  #content-field h2 {
    @apply text-3xl;
  }
}
</style>
