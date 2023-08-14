<template>
    <div>
        <h1>Person</h1>
        <div class="flex gap-2 text-gray-800">
            <input type="text" placeholder="First Name" v-model="firstName" />
            <input type="text" placeholder="Last Name" v-model="lastName" />
        </div>
        <PersonGreeting :firstName=firstName :lastName=lastName @callHeroes="callHeroes" />
    </div>
</template>

<script>
import { ref } from 'vue';
import PersonGreeting from './PersonGreeting.vue';

export default {
    name: "Person",
    components: { PersonGreeting },
    setup() {
        const firstName = ref('');
        const lastName = ref('');

        function callHeroes(fullName) {
            alert(`Calling ${fullName}`);
        }

        return {
            firstName,
            lastName,
            callHeroes,
        };
    },
}
</script>