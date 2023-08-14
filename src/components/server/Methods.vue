<template>
    <div>
        <h1 class="text-xl">
            Methods Component
        </h1>
        <h2 class="text-2xl">
            Options {{ count }}
        </h2>
        <button @click="increment" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Increment Options
        </button>
        <button @click="incrementCount" class="bg-blue-500 hover:bg-blue-700 m-1 text-white font-bold py-2 px-4 rounded">
            Increment Setup
        </button>
        <hr>
        <h2 class="text-2xl">
            Setup {{ fistName }} {{ lastName }}
        </h2>
        <button @click="updateState" class="bg-blue-500 hover:bg-blue-700 m-1 text-white font-bold py-2 px-4 rounded">
            Update State
        </button>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

export default {
    name: "Methods",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    },
    setup() {
        const count = ref(0)
        const state = reactive({
            fistName: 'John',
            lastName: 'Doe'
        })

        function incrementCount() {
            count.value++
        }

        function updateState() {
            state.fistName = 'Kait'
            state.lastName = 'Paresi'
        }

        return {
            count,
            incrementCount,
            ...toRefs(state),
            updateState
        }
    }
}
</script>