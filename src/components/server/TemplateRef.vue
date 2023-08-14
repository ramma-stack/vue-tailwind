<template>
    <div>
        <h2 class="text-2xl">
            Template Ref
        </h2>
        <input type="text" placeholder="Enter your name" ref="name"
            class="border-2 border-gray-500 text-gray-800 p-2 rounded-lg focus:outline-none focus:border-blue-500">
        <PostList ref="postList" />
    </div>
</template>

<script>
import PostList from './PostList.vue';
import { ref, onMounted } from 'vue';

export default {
    name: "TemplateRef",
    components: { PostList },
    setup() {
        const name = ref('');

        onMounted(() => {
            name.value.focus();
        })

        return {
            name,
        }
    }
    // mounted() {
    //     console.log(this.$refs.postList);
    //     this.$refs.name.focus();
    // }
}
</script>