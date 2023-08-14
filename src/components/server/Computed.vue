<template>
    <div>
        <h2 class="text-xl">
            Computed Component
        </h2>
        <h3 class="text-lg">
            Computed Properties Options API
        </h3>
        <div class="flex gap-2 py-2">
            <input type="text" v-model="fName" placeholder="First Name" class="text-gray-800">
            <input type="text" v-model="lName" placeholder="Last Name" class="text-gray-800">
        </div>
        <div class="py-2">
            <h1>
                Full Name: {{ fullName }}
            </h1>
        </div>
        <h3 class="text-lg">
            Computed Properties Composition API (ref)
        </h3>
        <div class="flex gap-2 py-2">
            <input type="text" v-model="fistName" placeholder="First Name" class="text-gray-800">
            <input type="text" v-model="lastName" placeholder="Last Name" class="text-gray-800">
        </div>
        <div class="py-2">
            <h1>
                Full Name: {{ refFullName }}
            </h1>
        </div>
        <h3 class="text-lg">
            Computed Properties Composition API with Reactivity
        </h3>
        <div class="flex gap-2 py-2">
            <input type="text" v-model="rFistName" placeholder="First Name" class="text-gray-800">
            <input type="text" v-model="rFastName" placeholder="Last Name" class="text-gray-800">
        </div>
        <div class="py-2">
            <h1>
                Full Name: {{ refFullNameReact }}
            </h1>
        </div>
    </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from 'vue';
export default {
    name: "Computed",
    data() {
        return {
            fName: '',
            lName: ''
        }
    },
    computed: {
        fullName() {
            return `${this.fName} ${this.lName}`
        }
    },
    setup() {
        const fistName = ref('');
        const lastName = ref('');

        const refFullName = computed(() => {
            return `${fistName.value} ${lastName.value}`
        })

        const state = reactive({
            rFistName: '',
            rFastName: ''
        })

        const refFullNameReact = computed(() => {
            return `${state.rFistName} ${state.rFastName}`
        })

        return {
            fistName,
            lastName,
            refFullName,
            ...toRefs(state),
            refFullNameReact
        }
    }
}
</script>