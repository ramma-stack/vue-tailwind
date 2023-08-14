<template>
    <div>
        <h1>Person Greeting</h1>
        <h2>Hello {{ firstName }} {{ lastName }}</h2>
        <h2>Hello Computed Options {{ fullName }}</h2>
        <h2>Hello Computed Composition {{ fullNameCom }}</h2>

        <button @click="sendEvent" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Call
            Heroes</button>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: "PersonGreeting",
    setup(props, context) {
        console.log(context);
        const fullNameCom = computed(() => `${props.firstName} ${props.lastName}`);

        function sendEvent() {
            context.emit('callHeroes', this.fullNameCom);
        }

        return {
            fullNameCom,
            sendEvent,
        }
    },
    props: ['firstName', 'lastName'],
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    },
}
</script>