<template lang="">
    <div>
        <h2 class="text-gray-50">ComponentA</h2>
        <ComponentB />
    </div>
</template>
<script>
import ComponentB from "./ComponentB.vue";

export default {
    name: "ComponentA",
    components: {
        ComponentB,
    },
};
</script>
