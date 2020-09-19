<template>
    <div>
        <div v-if="$static.posts.edges">
            <g-link v-for="edge in $static.posts.edges" :key="edge.node.id" :to="edge.node.path"> 
                <div class="border-b border-secondary py-4 px-2 hover:bg-gray-200">
                    <h2 class="text-xl sm:text-3xl">{{ edge.node.title }}</h2>
                    <span class="text-secondary text-sm">{{ edge.node.date }}</span>
                </div>
            </g-link>
        </div>
        <div v-else class="p-4 rounded bg-gray-300 flex">
            <svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
            </svg>
            <p>Coming Soon...</p>
        </div>
    </div>
</template>

<static-query>
query {
    posts: allPost {
        edges {
            node {
                id,
                title,
                date,
                path
            }
        }
    }
}
</static-query>

<script>
export default {
    name: "BlogsList"
}
</script>