<template>
    <div>
        <h2 class="text-2xl">
            Post Lists
        </h2>
        <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="getPosts">
            Get Posts
        </button> -->
        <div v-if="errorMsg" class="text-red-500 font-bold">{{ errorMsg }}</div>
        <div class="mt-5">
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <h1 class="text-xl">Id: {{ post.id }}</h1>
                    <h2 class="text-lg">Title: {{ post.title }}</h2>
                    <p class="text-base">Body: {{ post.body }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "PostList",
        data() {
            return {
                posts: [],
                errorMsg: '',
            }
        },
        methods: {
            getPosts() {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => {
                        this.posts = response.data;
                    })
                    .catch((error) => {
                        console.log(error);
                        this.errorMsg = 'Error retrieving data';
                    })
            }
        },
        created() {
            this.getPosts();
        },
    }
</script>