<template>
    <div>
        <h2 class="text-xl">
            Hover Counter
        </h2>
        <h2 @mouseover="increment">Hovered {{ count }} times</h2>
    </div>
</template>

<script>
import useCounter from '../hooks/useCounter';
import Counter from '../mixins/Counter';

export default {
    name: "HoverCounter",
    data() {
        return {
            count: 100
        }
    },
    // mixins: [Counter],
    setup() {
        const { count, increment } = useCounter(100, 5);

        return {
            count,
            increment,
        }
    },
}
</script>

<style lang="scss" scoped></style>