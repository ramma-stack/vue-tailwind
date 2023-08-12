<template>
    <div>
        <h1 class="text-blue-100 text-2xl font-bold">
            <p>{{ sayHello() }}</p>
            <p>{{ myName }}</p>
            <p v-html="myName"></p>
            <p :id="headindId">Heading</p>
            <button :disabled="isDisabled"
                class="border-2 border-blue-100 hover:ring-1 rounded px-3 py-1 m-2">Click</button>
            <h1 :class="isPromoted && 'underline'" class="text-red-500">Add to this List!</h1>

            <div class="text-xl text-white">
                <p v-if="number > 0">Number is Large</p>
                <p v-else-if="number < 0">Number is Small</p>
                <p v-else>Number is Equals</p>
            </div>

            <template v-if="display">
                <div class="flex flex-col m-4">
                    <p>Number One</p>
                    <p>Number Tow</p>
                    <p>Number Three</p>
                </div>
            </template>

            <h1 v-show="display">Using Show</h1>
            <h1 v-if="display">Using If</h1>

        </h1>
    </div>
</template>

<script>
export default {
    name: "Welcome",
    data() {
        return {
            message: "Hello World!",
            name: "Vue 3 + Vite + TypeScript",
            myName: "<br>RamyarRebwar</br>",
            headindId: "heading",
            isDisabled: false,
            isPromoted: true,
            number: 0,
            display: true,
        };
    },
    methods: {
        sayHello() {
            return this.message + ' Welcome to the' + this.name + 'setup!';
        },
    },
}
</script>