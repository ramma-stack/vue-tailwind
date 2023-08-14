<template>
    <div class="flex items-center gap-3 mt-3">
        <h2>Parent Component</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
            @click="showChild = !showChild">Toggle Child</button>
    </div>
    <div v-if="showChild">
        <Child />
    </div>
</template>

<script>
import Child from './Child.vue';

export default {
    name: "Parent",
    components: { Child },
    data() {
        return {
            showChild: true
        }
    },
    beforeCreate() {
        console.log('Parent beforeCreate');
    },
    created() {
        console.log('Parent created');
    },
    beforeMount() {
        console.log('Parent beforeMount');
    },
    mounted() {
        console.log('Parent mounted');
    },
    beforeUpdate() {
        console.log('Parent beforeUpdate');
    },
    updated() {
        console.log('Parent updated');
    },
    beforeUnmount() {
        console.log('Parent beforeUnmount');
    },
    unmounted() {
        console.log('Parent unmounted');
    },
}
</script>

<style lang="scss" scoped></style>