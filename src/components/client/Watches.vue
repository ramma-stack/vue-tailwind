<template>
    <div class="text-gray-50 p-3">
        <h1>Watches (0-20)</h1>
        <h2>Volume: {{ volume }}</h2>
        <div class="flex gap-1">
            <button @click="volume += 2" class="bg-gray-50 text-gray-700 px-2 py-1 rounded-md">+</button>
            <button @click="volume -= 2" class="bg-gray-50 text-gray-700 px-2 py-1 rounded-md">-</button>
        </div>

        <div class="flex flex-col gap-1">
            <input type="text" v-model="movie" class="bg-gray-50 text-gray-700 px-2 py-1 rounded-md" />
            <input type="text" v-model="movieInfo.title" class="bg-gray-50 text-gray-700 px-2 py-1 rounded-md" />
            <input type="text" v-model="movieInfo.actor" class="bg-gray-50 text-gray-700 px-2 py-1 rounded-md" />

            <button
                @click="movieList = movieList.concat([movie])"
                class="bg-gray-50 text-gray-700 px-2 py-1 rounded-md"
            >
                Add Movie
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "watches",
    data() {
        return {
            volume: 0,
            movie: "Matrix",
            movieInfo: {
                title: "",
                actor: "",
            },
            movieList: ["Inception", "Interstellar"],
        };
    },
    watch: {
        volume(newValue, oldValue) {
            if (newValue === 16 && newValue > oldValue) {
                alert("This volume may be damaged your ears!");
            }
        },
        movie(newValue) {
            console.log("Movie is changed to: " + newValue);
        },
        movie: {
            handler(newValue) {
                console.log("Movie is changed to: " + newValue);
            },
            immediate: true,
        },
        movieInfo: {
            handler(newValue) {
                console.log("Movie title is " + newValue.title + " and actor is " + newValue.actor);
            },
            deep: true,
        },
        movieList: {
            handler(newValue) {
                console.log("Movie list is changed to: " + newValue);
            },
            immediate: true,
            // deep: true,
        },
    },
};
</script>
