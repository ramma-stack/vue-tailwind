<template>
    <div>
        <h2 class="text-gray-50">Hello {{ name }} and Hero name is {{ heroName }}</h2>
        <h3 v-bind="$attrs" class="text-gray-50">Title: {{ title }}</h3>
        <h3 class="text-gray-50">Likes: {{ likes }}</h3>
        <h3 class="text-gray-50">Is Published: {{ isPublished }}</h3>
    </div>
</template>
<script>
export default {
    name: "greet",
    props: {
        name: {
            type: String,
            required: true,
        },
        heroName: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: "Article title",
        },
        likes: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
    },
    inheritAttrs: false,
};
</script>
