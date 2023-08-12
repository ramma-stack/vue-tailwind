<template>
    <div>
        <h2 class="font-bold">Name List</h2>
        <br>
        <h2 class="font-bold">Names of tags</h2>
        <div v-for="(name, index) in names" :key="name" class="flex gap-2">
            <h3>{{ name.fistName }}</h3>
            <h3>{{ name.lastName }}</h3>
        </div>
        <br>
        <h2 class="font-bold">Names of slots</h2>
        <div v-for="(name, index) in names" :key="name" class="flex gap-2">
            <slot :firstName="name.fistName" :lastName="name.lastName" />
        </div>
    </div>
</template>
<script>
export default {
    name: "NameList",
    data() {
        return {
            names: [
                {
                    fistName: "Ramyar",
                    lastName: "Ezzati",
                },
                {
                    fistName: "John",
                    lastName: "Doe",
                },
                {
                    fistName: "Pola",
                    lastName: "Daiana",
                },
            ],
        };
    },
}
</script>
<style lang="">
    
</style>