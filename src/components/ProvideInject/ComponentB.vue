<template lang="">
    <div>
        <h2 class="text-gray-50">ComponentB</h2>
        <ComponentC />
    </div>
</template>
<script>
import ComponentC from "./ComponentC.vue";

export default {
    name: "ComponentB",
    components: {
        ComponentC,
    },
};
</script>
