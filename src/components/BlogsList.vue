<template>
    <div>
        <g-link v-for="edge in $static.posts.edges" :key="edge.node.id" :to="edge.node.path"> 
            <div class="border-b border-secondary py-4 px-2 hover:bg-gray-200">
                <h2 class="text-3xl">{{ edge.node.title }}</h2>
                <span class="text-secondary text-sm">{{ edge.node.date }}</span>
            </div>
        </g-link>
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