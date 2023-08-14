<template>
    <div>
        <h2 class="text-xl">
            Demo Component
        </h2>
        <h3>
            Ref/ {{ name }}
        </h3>
        <h3>
            Reactive/ {{ fistName }} {{ lastName }}
        </h3>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';

export default {
    name: "Demo",
    components: {},
    setup() {
        const name = ref('John Doe');

        const state = reactive({
            fistName: 'John',
            lastName: 'Doe'
        })

        setInterval(() => {
            // name.value = 'Kait Willson';
            state.fistName = 'Kait';
            state.lastName = 'Willson';
            console.log(state);
        }, 2000);

        return {
            ...toRefs(state),
            name
        }
    }
}
</script>

<style lang="scss" scoped></style>