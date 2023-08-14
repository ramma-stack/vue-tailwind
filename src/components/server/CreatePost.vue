<template>
    <div>
        <h2 class="text-2xl mb-2">
            Create Post
        </h2>
        <form @submit.prevent="createPost" class="grid items-start gap-4">
            <div class="flex items-start gap-3">
                <label for="userId">User Id</label>
                <input type="text" id="userId" v-model="formdata.userId" placeholder="Enter User Id"
                    class="border-2 border-gray-500 rounded-md text-gray-800">
            </div>
            <div class="flex items-start gap-3">
                <label for="title">Title</label>
                <input type="text" id="title" v-model="formdata.title" placeholder="Enter Title"
                    class="border-2 border-gray-500 rounded-md text-gray-800">
            </div>
            <div class="flex items-start gap-3">
                <label for="body">Body</label>
                <textarea name="body" id="body" cols="30" rows="3" v-model="formdata.body" placeholder="Enter Body"
                    class="border-2 border-gray-500 rounded-md text-gray-800"></textarea>
            </div>
            <span>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Post
                </button>
            </span>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "CreatePost",
    data() {
        return {
            formdata: {
                userId: '',
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            axios.post('https://jsonplaceholder.typicode.com/posts', this.formdata)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
}
</script>