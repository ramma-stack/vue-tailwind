<template>
    <div>
        <h2 class="font-bold capitalize">Tab A Content</h2>
        <input type="text" v-model="name" class="border-2 border-gray-400 text-gray-800 p-2 rounded-lg w-44">
    </div>
</template>

<script>
export default {
    name: "TabA",
    data() {
        return {
            name: "Tab A"
        };
    },
}
</script>