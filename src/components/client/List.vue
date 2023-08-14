<template>
    <div>
        <h2 v-for="(name, index) in names" class="text-xl text-gray-50">{{ name + ' in index ' + index }}</h2>
        <h2 v-for="name in fullname">{{ name.firstname }} {{ name.lastname }}</h2>

        <h1 v-for="name in names" class="text-lg text-blue-100">
            <p v-if="name == 'Rzgar'">{{ name }}</p>
        </h1>

        <p class="text-lg text-white">Sumation : {{ 5 + 4 + 6 }}</p>
        <p class="text-lg text-white">Sumation Method : {{ sum(5, 4, 6) }}</p>
        <p class="text-lg text-white">Multipley Method : {{ multiply(anotherNumber) }}</p>
    </div>
</template>

<script>
export default {

    name: "List",
    data() {
        return {
            names: ["Ramyar", "Rebwar", "Rzgar", "Rozhin"],
            fullname: [
                { firstname: "Ramyar", lastname: "Saeedpour" },
                { firstname: "Rebwar", lastname: "Ahmadian" },
                { firstname: "Rzgar", lastname: "Salary" },
                { firstname: "Rozhin", lastname: "Polandy" },
            ],
            baseMultiplier: 2,
            anotherNumber: 10,
        };
    },
    methods: {
        sum(a, b, c) {
            return a + b + c;
        },
        multiply(a) {
            return a * this.baseMultiplier;
        },
    },
}
</script>