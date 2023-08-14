<template>
    <div>
        <h2 class="text-xl">
            Click Counter
        </h2>
        <button @click="increment">Clicked {{ count }} times</button>
    </div>
</template>

<script>
import useCounter from '../hooks/useCounter';
import Counter from '../mixins/Counter';

export default {
    name: "ClickCounter",
    // mixins: [Counter],
    setup() {
        const { count, increment } = useCounter();

        return {
            count,
            increment,
        }
    },
}
</script>

<style lang="scss" scoped></style>