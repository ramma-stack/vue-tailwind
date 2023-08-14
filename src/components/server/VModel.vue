<template>
    <div>
        <h2 class="text-xl">
            VModel Component
        </h2>
        <div>
            <h1>
                Options API Form
            </h1>
            <div class="flex gap-2 py-2">
                <input type="text" v-model="fName" placeholder="First Name" class="text-gray-800">
                <input type="text" v-model="lName" placeholder="Last Name" class="text-gray-800">
            </div>
        </div>
        <div>
            <h1>
                Composition API Form
            </h1>
            <div class="flex gap-2 py-2">
                <input type="text" v-model="heroName" placeholder="Hero Name" class="text-gray-800">
                <input type="text" v-model="fistName" placeholder="First Name" class="text-gray-800">
                <input type="text" v-model="lastName" placeholder="Last Name" class="text-gray-800">
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';

export default {
    name: "VModel",
    data() {
        return {
            fName: '',
            lName: '',
        }
    },
    setup() {
        const heroName = ref('');
        const state = reactive({
            fistName: '',
            lastName: '',
        })
        return { heroName, ...toRefs(state) }
    }
}
</script>