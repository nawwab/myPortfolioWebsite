<template>
    <div>
        <g-link v-for="edge in $static.posts.edges" :key="edge.node.id" :to="edge.node.path"> 
            <div>
                <span>{{ edge.node.id }}</span>
                <h2>{{ edge.node.title }}</h2>
                <span>{{ edge.node.date }}</span>
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
    name: "blogsList"
}
</script>