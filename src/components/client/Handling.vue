<template>
    <div class="flex flex-col items-center text-center gap-2 w-full pt-5">
        <h1 class="text-white text-lg">{{ name }}</h1>
        <button @click="chnageName($event), Increment(1, $event)"
            class="text-indigo-400 border-2 border-indigo-400 px-2 py-1">
            Change Name
        </button>

        <h1 class="text-white text-lg">{{ count }}</h1>
        <div class="flex gap-1">
            <button @click="Increment(1, $event)" class="text-indigo-400 border-2 border-indigo-400 px-2 py-1">
                Increment
            </button>
            <button @click="Increment(5)" class="text-indigo-400 border-2 border-indigo-400 px-2 py-1">
                Increment 5
            </button>
            <button @click="Decrement(1)" class="text-indigo-400 border-2 border-indigo-400 px-2 py-1">
                Decrement
            </button>
            <button @click="Decrement(5)" class="text-indigo-400 border-2 border-indigo-400 px-2 py-1">
                Decrement 5
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Handling",
    data() {
        return {
            name: "Rzgar",
            count: 0,
        };
    },
    methods: {
        chnageName(event) {
            this.name = "Ramyar";
            console.log(event);
        },
        Increment(number, event) {
            this.count += number;
            console.log(event);
        },
        Decrement(number) {
            this.count -= number;
        },
    },
}
</script>