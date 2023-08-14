<template>
    <div>
        <h2 class="text-xl">
            Watch Component
        </h2>
        <h2>Watch Options API</h2>
        <div class="flex gap-2 py-2">
            <input type="text" v-model="name" placeholder="Name" class="text-gray-800">
        </div>
        <h2>Watch Composition API (refs)</h2>
        <div class="flex gap-2 py-2">
            <input type="text" v-model="firstName" placeholder="FirstName" class="text-gray-800">
            <input type="text" v-model="lastName" placeholder="LastName" class="text-gray-800">
        </div>
        <h2>Watch Composition API (reactive)</h2>
        <div class="flex gap-2 py-2">
            <input type="text" v-model="rFirstName" placeholder="FirstName" class="text-gray-800">
            <input type="text" v-model="rLastName" placeholder="LastName" class="text-gray-800">
            <input type="text" v-model="options.heroName" placeholder="HeroName" class="text-gray-800">
        </div>
    </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from 'vue';

export default {
    name: "Watch",
    data() {
        return {
            name: '',
        }
    },
    watch: {
        name(newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    },
    setup() {
        const firstName = ref('');
        const lastName = ref('Wanya');

        watch([firstName, lastName], (newVal, oldVal) => {
            console.log('First name newVal', newVal[0]);
            console.log('First name oldVal', oldVal[0]);
            console.log('Last name newVal', newVal[1]);
            console.log('Last name oldVal', oldVal[1]);
        }, { immediate: true })

        const state = reactive({
            rFirstName: '',
            rLastName: 'Doe',
            options: {
                heroName: ''
            }
        })

        watch(() => { return { ...state } }, (newVal, oldVal) => {
            console.log('rFirstName newVal', newVal.rFirstName);
            console.log('rFirstName oldVal', oldVal.rFirstName);
            console.log('rLastName newVal', newVal.rLastName);
            console.log('rLastName oldVal', oldVal.rLastName);
        })

        watch(() => state.rFirstName, (newVal, oldVal) => {
            console.log('rFirstName newVal', newVal);
            console.log('rFirstName oldVal', oldVal);
        })

        watch(() => state.options.heroName, (newVal, oldVal) => {
            console.log('heroName newVal', newVal);
            console.log('heroName oldVal', oldVal);
        }, { deep: true })

        return { firstName, lastName, ...toRefs(state) }
    }
}
</script>