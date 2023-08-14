<template>
    <div>
        <h1>Child B</h1>
        <ChildC />
    </div>
</template>

<script>
import ChildC from './ChildC.vue';

export default {
    name: "ChildB",
    components: { ChildC },
}
</script>