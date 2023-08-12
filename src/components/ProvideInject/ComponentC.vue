<template lang="">
    <div>
        <h2 class="text-gray-50">ComponentC</h2>
        <h3 class="text-gray-50 text-xs">ComponentC username is {{ username }}</h3>
    </div>
</template>
<script>
export default {
    name: "ComponentC",
    inject: ["username"],
};
</script>
