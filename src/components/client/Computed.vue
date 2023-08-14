<template>
    <div>
        <h2 class="text-gray-50">Fullname - {{ firstName }} {{ lastName }}</h2>
        <h2 class="text-gray-50">Computed Fullname - {{ fullName }}</h2>
        <button @click="setFullName" class="bg-gray-50 text-gray-700 px-2 py-1 rounded-md">Change Fullname</button>
        <h1 class="text-gray-50">Total Computed - {{ total }}</h1>
        <h1 class="text-gray-50">Total Method - {{ getTotal() }}</h1>
        <button
            @click="items.push({id: 4, title: 'Watch', price: 400})"
            class="bg-gray-50 text-gray-700 px-2 py-1 rounded-md"
        >
            Add Item
        </button>
        <div>
            <label for="country">Country</label>
            <input type="text" id="country" v-model="country" class="bg-gray-50 text-gray-700 px-2 py-1 rounded-md" />
        </div>

        <template v-for="item in items">
            <h2 v-if="item.price > 100" class="text-gray-50">{{ item.title }} {{ item.price }}</h2>
        </template>
        <h2 v-for="item in expensiveItems" class="text-indigo-100">{{ item.title + " " + item.price }}</h2>
    </div>
</template>

<script>
export default {
    name: "computed",
    data() {
        return {
            firstName: "Ahmad",
            lastName: "Azad",
            items: [
                {
                    id: 1,
                    title: "TV",
                    price: 100,
                },
                {
                    id: 2,
                    title: "Phone",
                    price: 200,
                },
                {
                    id: 3,
                    title: "Laptop",
                    price: 300,
                },
            ],
            country: "",
        };
    },
    methods: {
        getTotal() {
            console.log("Method is called");
            return this.items.reduce((total, item) => total + item.price, 0);
        },
        setFullName() {
            this.fullName = "Ramyar Rebwar";
        },
    },
    computed: {
        fullName: {
            get() {
                return this.firstName + " " + this.lastName;
            },
            set(value) {
                const parts = value.split(" ");
                this.firstName = parts[0];
                this.lastName = parts[1];
            },
        },
        total() {
            console.log("Computed is called");
            return this.items.reduce((total, item) => total + item.price, 0);
        },
        expensiveItems() {
            return this.items.filter((item) => item.price > 100);
        },
    },
};
</script>
