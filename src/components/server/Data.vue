<template>
    <div>
        <h2 class="text-xl">
            Data Component
        </h2>
        <h2>Option api first name is {{ o_fistname }}</h2>
        <h2>Composition api ref first name is {{ c_firstname }}</h2>
        <h2>Composition api ref details is {{ greet }}</h2>
        <h2>Composition api reactive first name is {{ state.firstname }}</h2>
        <h2>Composition api reactive details is {{ greetReactive }}</h2>
    </div>
</template>

<script>
import { ref, reactive } from "vue"

export default {
    name: "Data",
    data() {
        return {
            o_fistname: "John",
        }
    },
    setup() {
        const c_firstname = ref("Doe")
        const c_lastname = ref("Wayne")
        const c_heroname = ref("Batman")

        const greet = `Hello ${c_firstname.value} ${c_lastname.value} ${c_heroname.value}`

        const state = reactive({
            firstname: "John",
            lastname: "Doe",
            heroname: "Batman"
        })

        const greetReactive = `Hello ${state.firstname} ${state.lastname} ${state.heroname}`

        return {
            c_firstname,
            c_lastname,
            c_heroname,
            greet,
            state,
            greetReactive
        }
    }
}
</script>