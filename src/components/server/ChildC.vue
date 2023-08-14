<template>
    <div>
        <h1>Child C</h1>
        <h1>Child C Component {{ shareName }}</h1>
        <h1>Child C Component {{ shareNameCom }}</h1>
        <h1>Child C Component {{ count }} Count</h1>
        <h1>Child C Component {{ fistName }} {{ lastName }}</h1>
    </div>
</template>

<script>
import { inject, toRefs } from 'vue';

export default {
    name: "ChildC",
    inject: ['shareName'],
    setup() {
        const shareNameCom = inject('shareNameCom', 'Default Value');

        const count = inject('count', 0);
        const state = inject('state', {});
        const increment = inject('increment', () => { });

        return {
            shareNameCom,
            ...toRefs(state),
            count,
            increment,
        }
    }
}
</script>